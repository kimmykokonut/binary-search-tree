export default class BST {
  constructor() {
    this.root = null;
  }
  insertNode(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this; //inserts node to left, breaks loop
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
            //inserts node to right, breaks loop
          } else {
            currentNode = currentNode.right;
            //sets currentNode value and re-enters loop
          }
        }
      }
    }
  }  
}