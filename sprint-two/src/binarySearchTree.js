//completed independently after sprint was over--CM
var BinarySearchTree = function(value) {
  var newTree = Object.create(btsMethods);
  newTree.value = value;
  return newTree;
};

var btsMethods = {};

btsMethods.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

btsMethods.contains = function (value) {
  if (value === this.value) {
    return true
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      if (this.left.contains(value)) {
        return true;
      };
    }
  }
  if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      if (this.right.contains(value)) {
        return true;
      };
    }
    return false;
  }


};
btsMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if(this.left){
    this.left.depthFirstLog(cb);
  }
  if(this.right) {
  this.right.depthFirstLog(cb);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 logarithmic
 */
