var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //take in value
    //adds it to end storage at numerical key (storageSize)
    storage[storageSize] = value;

    //increment storageSize by 1
    storageSize += 1;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {

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
