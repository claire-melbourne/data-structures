var Queue = function() {
  var someQueue = {};
  someQueue.storageSize = 0;
  _.extend(someQueue, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someQueue;
};

var queueMethods = {};
queueMethods.enqueue = function (val) {
  // add value to end
  // storageSize += 1
  // console.log('this', this);
  var num = this.storageSize;
  this[num] = val;
  this.storageSize += 1;
};
queueMethods.dequeue = function () {
  //save object at zero as removedVal
  var removedVal = this['0'];
  // iterate over key value pairs
  // set key to 0
  // while key value is defined
  if (this.storageSize === 0) {
    return 0;
  }
  for (var key = 0; key < this.storageSize; key++) {
    var nextKey = key + 1;
    if (!this[nextKey]) {
      delete this[key];
    } else {
      this[key] = this[nextKey];
    }
  }
  //  if next key value is undefined, delete current key
  //  otherwise
  //  set current key to equal next key's value
  this.storageSize -= 1;
  return removedVal;
};
queueMethods.size = function () {
  // set counter to 0
  // let counter = 0;
  // //loop over each key in someQueue
  // for (var key in this) {
  //   if (typeof this.key === 'function') {
  //     continue;
  //   } else {
  //     console.log('this', this);
  //     counter ++;
  //   }
  // }
  // counter ++;
  return this.storageSize;
};

//someQueue = {enqueue: function(), size: function(), '0': 'a', '1': 'b', '2': 'c'}
