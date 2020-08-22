var Tree = function(value) {
  var newTree = {};
  // console.log('value: ', value);
  // console.log('newTree: ', newTree);
  newTree.value = value;
  // your code here
  //extend tree methods to tree here?
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};
// input a value
// create a new tree with value
// assign new tree to children array
// {value: 4, children: []}
// var tree = Tree(9)

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  // set variable node = this
  // if node.value = target
  if (this.value === target) {
    // return true
    return true;
  }
  // iterate over children
  // currentNode.children = [7, 10, 30]
  for (var i = 0; i < this.children.length; i ++) {
    // invoke contains on each child
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  // return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
