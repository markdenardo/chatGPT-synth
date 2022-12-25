let audioCtx = new AudioContext();
let oscillator = audioCtx.createOscillator();
let gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

function changeFrequency(frequency) {
  oscillator.frequency.value = frequency;
}
function toggleOscillator() {
  if (oscillator.started) {
    oscillator.stop();
    oscillator.started == false;
  } else {
    oscillator.start();
    oscillator.started == true;
  }
}
function changeVolume(volume) {
  gainNode.gain.value = volume;
}
function setup() {
  // create canvas, slider for frequency, and slider for volume
  createCanvas(400, 400);
  frequencySlider = createSlider(20, 2000, 440);
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
}

function draw() {
  background(220);
  // use value of frequency slider to set oscillator frequency
  changeFrequency(frequencySlider.value());
  // use value of volume slider to set oscillator volume
  changeVolume(volumeSlider.value());
}

function mousePressed() {
  // start oscillator when mouse is pressed
  toggleOscillator();
}

function mouseReleased() {
  // stop oscillator when mouse is released
  toggleOscillator();
}
