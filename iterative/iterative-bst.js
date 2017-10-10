function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
}

Tree.prototype.insert = function(value) {
  node = new Node(value);
  if (this.root === null) {
    this.root = node;
    return node;
  }
  var current = this.root;

  while (current != null) {
    if (value <= current.data && !current.left) {
      return current.left = node;
    } else if (value > current.data && !current.right) {
      return current.right = node;
    } else if (value <= current.data && current.left) {
      current = current.left;
    } else if (value > current.data && current.right) {
      current = current.right;
    }
  }
};

Tree.prototype.search = function(value) {
  var current = this.root;
  if (current === null) {
    return false;
  }

  while (current != null) {
    if (value === current.data) {
      return true;
    } else if (value < current.data) {
      current = current.left;
    } else if (value > current.data) {
      current = current.right;
    }
  }
  return false;
}

// Tree.prototype.height = function() {
//   if (this.root === null) {
//     return 0;
//   }
//
//   var current = this.root;
//   var heightLeft = 0;
//   var heightRight = 0;
//
//   while (current !== null) {
//     if (current.left) {
//       heightLeft += 1;
//
//     }
//   }
// }

var myTree = new Tree();

console.log(myTree.insert(8));
console.log(myTree.insert(3));
console.log(myTree.insert(10));
console.log(myTree.insert(6));
console.log(myTree.search(6));
console.log(myTree.root);
