var Stack = function() {
  this.storageSize = 0;
};

Stack.prototype.push = function (value) {
  this[this.storageSize] = value;
  this.storageSize ++;
};

Stack.prototype.pop = function () {
  if (this.storageSize === 0) {
    return 0;
  }
  var removed = this[this.storageSize - 1];
  delete this[this.storageSize - 1];
  this.storageSize --;
  return removed;
};

Stack.prototype.size = function () {
  return this.storageSize;
};


