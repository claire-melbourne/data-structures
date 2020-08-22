var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // array of strings
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // console.log('set: ', this._storage);
  if (!this._storage[item]) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (!this._storage[item]) {
    return false;
  } return true;
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 Constant time for all of them!!!
 */
