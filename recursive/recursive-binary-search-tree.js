function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
};

function Tree() {
  this.root = null;
};

Tree.prototype.insert = function(value) {
  var node = new Node(value);

  if (this.root === null) {
    this.root = node;
    return node;
  }

  var current = this.root;
  // console.log("current: ", current);
  return insertHelper(current, value);
};

function insertHelper(current, value) {
  if (value <= current.data) {
    if (current.left) {
      return insertHelper(current.left, value);
    } else {
      current.left = new Node(value);
      return current.left;
    }
  } else {
    if (current.right) {
      return insertHelper(current.right, value);
    } else {
      current.right = new Node(value);
      return current.right;
    }
  }
};


var myTree = new Tree();

// # Add some values to the linked list
console.log("Adding 5, 3 and 1 to the linked list.");
console.log(myTree.insert(5));
console.log(myTree.insert(3));
console.log(myTree.insert(6));
console.log(myTree.root);
