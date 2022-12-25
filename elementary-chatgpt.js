import { Node, Edge, Graph } from 'elementary.js';

class SynthNode extends Node {
  constructor(id, waveform) {
    super(id);
    this.waveform = waveform;
  }
  
  // Method for setting the waveform
  setWaveform(waveform) {
    this.waveform = waveform;
  }
  
  // Method for triggering the node (i.e., playing the note)
  trigger() {
    // Play the note using the current waveform
  }
}

class SynthEdge extends Edge {
  constructor(id, source, target) {
    super(id, source, target);
  }
  
  // Method for triggering the edge (i.e., connecting the nodes)
  trigger() {
    // Connect the source and target nodes
  }
}

class SynthGraph extends Graph {
  constructor() {
    super();
  }
  
  // Method for adding a node to the graph
  addNode(id, waveform) {
    let node = new SynthNode(id, waveform);
    this.add(node);
    return node;
  }
  
  // Method for adding an edge to the graph
  addEdge(id, source, target) {
    let edge = new SynthEdge(id, source, target);
    this.add(edge);
    return edge;
  }
  
  // Method for triggering the synth (i.e., playing all the notes)
  trigger() {
    // Iterate over all the nodes and edges in the graph and trigger them
    this.nodes.forEach(node => node.trigger());
    this.edges.forEach(edge => edge.trigger());
  }
}

// Create a new synth graph
let synth = new SynthGraph();

// Add some nodes to the graph and set their waveforms
let node1 = synth.addNode('node1', 'sine');
let node2 = synth.addNode('node2', 'square');

// Add an edge between the nodes
let edge = synth.addEdge('edge', node1, node2);

// Trigger the synth to play all the notes
synth.trigger();
