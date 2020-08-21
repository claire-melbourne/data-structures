var Stack = function() {
  var someStack = {};
  someStack.storageSize = 0;
  _.extend(someStack, stackMethods);
  return someStack;
};

var stackMethods = {};
stackMethods.pop = function () {
  //delete current key
  if (this.storageSize === 0) {
    return 0;
  }
  var size = this.storageSize;
  var key = this[size - 1];
  delete this[size - 1];
  this.storageSize --;
  return key;
};

stackMethods.push = function (value) {
//set var key to this.storageSize
  var key = this.storageSize;
  //set this[key] = value
  this[key] = value;
  this.storageSize ++;
};

stackMethods.size = function () {
  return this.storageSize;
};


