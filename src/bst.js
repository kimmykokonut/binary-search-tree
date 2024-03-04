export default class BST {
  constructor() {
    this.root = null;
  }
  insertNode(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.left = node;
    }
  }
}