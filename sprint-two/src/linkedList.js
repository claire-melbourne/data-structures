var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.lastNode = null;

  list.addToTail = function(value) {
    //create the node for new value
    var newNode = Node(value);
    //if there's nothing in the list
    if (list.head === null) {
      //point head towards value
      list.head = newNode;
      //point tail towards value
    } else {
      //point what tail is looking at to input value
      list.lastNode.next = newNode;
    }
    list.tail = newNode; //question, should this just go at the end of the function, after if and else statements
    list.lastNode = newNode;
  };

  list.removeHead = function() {
    // set a variable (removed) equal to list.head.value
    var removed = list.head.value;
    list.head = list.head.next;
    // return removed
    return removed;
  };

  list.contains = function(target) {
    //if list.head === null
    if (list.head === null) {
      return false;
    }
    var currentNode = list.head;
    //var currentNode (start with list.head?)
    //currentNode = value: 4, next: (value: null, next: null)
    // while currentNode is defined
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
