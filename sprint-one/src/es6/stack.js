class Stack {
  constructor() {
    this.storageSize = 0;
  }

  push(value) {
    this[this.storageSize] = value
    this.storageSize ++;
  }
  pop() {
    var removed = this[this.storageSize - 1];
    if (this.storageSize === 0) {
      return 0;
    }
    delete this[this.storageSize - 1];
    this.storageSize --;
    return removed;
  }
  size() {
    return this.storageSize;
  }
}