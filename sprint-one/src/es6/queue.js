class Queue {
  constructor() {
    this.storageSize = 0;
  }
  enqueue(value) {
    var key = this.storageSize;
    this[key] = value;
    this.storageSize ++;
  }
  dequeue() {
    var removed = this['0'];
    if (this.storageSize === 0) {
      return 0;
    }
    for (var key = 0; key < this.storageSize; key ++ ) {
      var nextKey = key + 1;
      if (!this[nextKey]) {
        delete this[key];
      } else {
        this[key] = this[nextKey];
      }
    }
    this.storageSize --;
    return removed;
  }
  size() {
    return this.storageSize;
  }
}
