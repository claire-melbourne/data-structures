var Queue = function() {
  this.storageSize = 0;
};

Queue.prototype.enqueue = function (value) {
  var key = this.storageSize;
  this[key] = value;
  this.storageSize += 1;
};
Queue.prototype.dequeue = function() {
  var removed = this['0'];
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
  this.storageSize --;
  return removed;
};
Queue.prototype.size = function () {
  return this.storageSize;
};


