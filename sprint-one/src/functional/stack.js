var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
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
