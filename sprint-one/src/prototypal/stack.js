var Stack = function() {
  var someStack = Object.create(stackMethods);
  someStack.storageSize = 0;
  return someStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this[this.storageSize] = value;
  this.storageSize ++;
};

stackMethods.pop = function () {
  if (this.storageSize === 0) {
    return 0;
  }
  var removed = this[this.storageSize - 1];
  delete this[this.storageSize - 1];
  this.storageSize --;
  return removed;
};

stackMethods.size = function () {
  return this.storageSize;
};

