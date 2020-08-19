var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // takes in a value
    // set the key to storage.size
    // set the key equal to the value
    // add one to the size
    storage[storageSize] = value;
    storageSize += 1;
  };

  someInstance.dequeue = function() {
    // delete property at 0
    var dqed = storage['0'];
    delete storage['0'];
    storageSize -= 1;
    // loop over keys
    for (var key in storage) {
      // subtract parse int of current key by 1
      var backCounter = parseInt(key) - 1;
      // subtract one from the size
      console.log(key);
    }
    return dqed;
  };

  someInstance.size = function() {
    // takes in an object, in this case storage
    // if storage is empty, return 0
    // set a variable (count) = 0
    // loop over storage
    // for each value, add 1 to count
    // return counter
    var count = 0;
    if (storage === {}) {
      return 0;
    }
    for (var key in storage) {
      count += 1;
    }
    return count;
  };

  return someInstance;
};

