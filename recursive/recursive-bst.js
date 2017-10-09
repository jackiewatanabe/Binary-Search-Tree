function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
}

Tree.prototype.insert = function(value) {
  // var node = new Node(value)
  if (this.root === null) {
    this.root = new Node(value);
    return this.root;
  }
  var current = this.root;

  return insertHelper(current, value);
}

function insertHelper(current, value) {
  if (value <= current.data) {
    if (current.left) {
      return insertHelper(current.left, value);
    } else {
      return current.left = new Node(value);
    }
  } else {
    if (current.right) {
      return insertHelper(current.right, value);
    } else {
      return current.right = new Node(value);
    }
  }
}

Tree.prototype.search = function(value) {
  let current = this.root;

  if (current === null) {
    return false;
  }

  // if (value === current.data) {
  //   return true;
  // }
  //
  // if (value < current.data && current.left) {
  //   return search(current.left, value);
  // } else if (value > current.data && current.right) {
  //   return search(current.right, value);
  // }
  return searchHelper(current, value);
}

function searchHelper(current, value) {
  if (value === current.data) {
    return true;
  }

  if (value < current.data && current.left) {
    return searchHelper(current.left, value);
  } else if (value > current.data && current.right) {
    return searchHelper(current.right, value);
  } else {
    return false;
  }
}

Tree.prototype.height = function(root) {
  if (root === null) {
    return 0;
  }

  let heightLeft = this.height(root.left);
  let heightRight = this.height(root.right);

  if (heightLeft < heightRight) {
    return heightRight + 1;
  }

  return heightLeft + 1;
}

Tree.prototype.preorder = function(root) {
  if (root === null) {
    return;
  }

  console.log(root.data);

  this.preorder(root.left);

  this.preorder(root.right);

}

Tree.prototype.inorder = function(root) {
  if (root === null) {
    return;
  }

  if (root.left) {
    this.inorder(root.left);
  }

  console.log(root.data);

  if (root.right) {
    this.inorder(root.right);
  }

}

Tree.prototype.inorder = function(root) {
  if (root === null) {
    return;
  }

  if (root.left) {
    this.inorder(root.left);
  }
  if (root.right) {
    this.inorder(root.right);
  }
  console.log(root.data);
}

Tree.prototype.levelOrder = function(current) {
  if (current === null) {
    return;
  }
  var height = this.height(current);

  for (let i = 0 ; i < height; i++) {
      printLevel(current, i+1);
  }
}

function printLevel(current, height) {
  if (current === null) {
    return;
  }

  if (height === 1) {
    console.log(current.data);
  } else {
    printLevel(current.left, height-1);
    printLevel(current.right, height-1);
  }
}


var myTree = new Tree();
// console.log("Adding 5, 3, 6, 1 to the linked list.");

// console.log(myTree.search(5));
console.log(myTree.insert(8));
// console.log(myTree.height(myTree.root));
// console.log(myTree.search(5));
console.log(myTree.insert(3));
console.log(myTree.insert(10));
console.log(myTree.insert(1));
console.log(myTree.insert(6));
console.log(myTree.insert(4));
console.log(myTree.insert(7));
console.log(myTree.insert(14));
console.log(myTree.insert(13));
// console.log(myTree.search(0));
// console.log(myTree.height(myTree.root));
console.log("---------");
console.log(myTree.levelOrder(myTree.root));
// console.log(myTree.root);
