var Queue = function() {
  var someQueue = {};
  _.extend(someQueue, Queue.queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someQueue;
};

var queueMethods = {};
// Queue.queueMethods.enqueue = function () {}
// Queue.queueMethods.dequeue = function () {}
Queue.queueMethods.size = function () {
  //set counter to 0
  //loop over each key in someQueue
  // counter ++;
  return counter;
};


