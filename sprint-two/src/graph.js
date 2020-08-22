

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};
  //this is what's happening under the hood:
  //this = Object.create(Graph.prototype)
  //this {};
  //return this
};

// Add a node to the graph, passing in the node's value.

//Fred is our graph
//Fred.newNode ={}
//

Graph.prototype.addNode = function(node) {
  //set this.newNode = []
  this._nodes[node] = {};
  this._nodes[node].edges = {};
  //{edges {}}
  // {node: {edges: {} }}
  //set key to value and value to input node

  //
};
//fred.newNode = {};
//fred.newNode.value = 1
//fred.newNode.edges = [];
//fred.newNode = {value: 1, edges: []}
//fred = {{value:1, edges: []}}

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this._nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this._nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this._nodes[fromNode].edges[toNode]) {
    return false;
  }
  return true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
};
//{{'1' : edges :{'5' : '5'}}
//{{'5' : edges :{'1' : '1'}}}

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


