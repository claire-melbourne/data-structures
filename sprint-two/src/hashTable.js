

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // for (var i = 0; i < this._limit; i++) {
  //   this._storage[i] = [];
  // }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('val1 index: ', getIndexBelowMaxForKey('Steven', this._limit));
  // console.log('val2 index: ', getIndexBelowMaxForKey('val2', this._limit));
  // if bucket is undefined
  if (!this._storage[index]) {
  // set value of this._storage.index to [];
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
    for (var i = 0; i < this._storage[index].length; i ++) {
      if (this._storage[index][i][0] === k) {
      // tuple[1] = v
        this._storage[index][i][1] = v;
      }
      if (this._storage[index][i][0] !== k && !this._storage[index][i + 1][0]) {
        this._storage[index].push([k, v]);
      }
    }
  }
  console.log('bucket: ', this._storage[index]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    // set value of this._storage.index to [];
    this._storage[index] = [];
  }
  // console.log('bucket: ', bucket);
  // iterate over bucket
  for (var i = 0; i < this._storage[index].length; i++) {
    // if bucket[i][0] === k
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //edge case for undefined bucket
  //iterate over bucket
  for (var i = 0; i < this._storage[index].length; i++) {
    //if the element/tuple at index 0 equals k
    if (this._storage[index][i][0] === k) {
      var removedTuple = this._storage[index][i];
      //slice? remove that element/tuple
      console.log('before: ', this._storage[index]);
      this._storage[index].splice(i, 1);
      console.log('after: ', this._storage[index]);
      //return removedTuple
    }

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
  Constant time even though there are occasional iterations through comparatively tiny bucket arrays
 */


