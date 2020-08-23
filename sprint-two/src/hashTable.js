

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // for (var i = 0; i < this._limit; i++) {
  //   this._storage[i] = [];
  // }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage[index]
  var bucket = this._storage[index];
  // if bucket is undefined
  if (!bucket) {
  // set value of this._storage.index to [];
    bucket = [];
    bucket.push([k, v]);
  } else {
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
      // tuple[1] = v
        bucket[i][1] = v;
      }
      if (bucket[i][0] !== k && !bucket[i + 1][0]) {
        bucket.push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


