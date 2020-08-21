var Queue = function() {
  var someQueue = Object.create(queueMethods);
  someQueue.storageSize = 0;
  return someQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  var key = this.storageSize;
  this[key] = value;
  this.storageSize += 1;
};
queueMethods.dequeue = function() {
  var removed = this['0'];
  if (this.storageSize === 0) {
    return 0;
  }
  // use a for loop to iterate over the numeric keys in someQueue
  for (var key = 0; key < this.storageSize; key++) {
    var nextKey = key + 1;
    if (!this[nextKey]) {
      delete this[key];
    } else {
      this[key] = this[nextKey];
    }
  }
  this.storageSize -= 1;
  return removed;
};
queueMethods.size = function () {
  return this.storageSize;
};


