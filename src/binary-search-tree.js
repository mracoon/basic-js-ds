const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.items = []
  }


  root() {
    if ('data' in this) { return this }
    else { return null }
  }

  add(data) {
    this.items.push(data)
    const newNode = new Node(data)
    let currentNode = this

    function addChild(currentNode) {

      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
          currentNode = currentNode.left
          addChild(currentNode)
        }
      }
      if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
          currentNode = currentNode.right
          addChild(currentNode)
        }
      }
    }
    if ('data' in this) {//дерево не пустое
      addChild(currentNode)
    } else {
      this.data = data
      this.left = null;
      this.right = null;
    }

  }

  has(data) {
    return (this.items).includes(data)
  }

  find(val) {

    if (!((this.items).includes(val))) {
      return null
    }
    let currentNode = this
    function findNode() {

      if (currentNode.data === val) {
        return currentNode
      } else {

        if (val < currentNode.data) {
          currentNode = currentNode.left
          findNode()

        }
        if (val > currentNode.data) {
          currentNode = currentNode.right
          findNode()

        }
      }
      return currentNode
    }
    return findNode()

  }

  remove(data) {

    let items = this.items
    items.splice(this.items.indexOf(data), 1)

    for (let key in this) {
      delete this[key]
    }
    this.items = []

    for (let i = 0; i < items.length; i++) {
      this.add(items[i])
    }

  }

  min() {
    return Math.min(...this.items)
  }

  max() {
    return Math.max(...this.items)
  }

}

module.exports = {
  BinarySearchTree
};