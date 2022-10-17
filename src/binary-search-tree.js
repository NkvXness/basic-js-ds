const {
    NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.rootTree = null
    }

    root() {
        return this.rootTree
    }

    add(data) {
        this.rootTree = addSmth(this.rootTree, data)

        function addSmth(node, data) {
            if (!node) {
                return new Node(data)
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                node.left = addSmth(node.left, data)
            } else {
                node.right = addSmth(node.right, data)
            }
            return node
        }
    }

    has(data) {
        return searchSmth(this.rootTree, data)

        function searchSmth(node, data) {
            if (!node) {
                return false
            }
            if (node.data === data) {
                return true
            }
            return data > node.data ? searchSmth(node.right, data) : searchSmth(node.left, data)
        }
    }

    find(data) {
        return findSmth(this.rootTree, data)

        function findSmth(node, data) {
            if (!node) {
                return null
            } else if (node.data === data) {
                return node
            }
            return data > node.data ? findSmth(node.right, data) : findSmth(node.left, data)
        }

    }

    remove(data) {
        this.rootTree = removeSmth(this.rootTree, data)

        function removeSmth(node, data) {
            if (!node) {
                return null
            }
            if (data < node.data) {
                node.left = removeSmth(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeSmth(node.right, data)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                } else if (!node.left) {
                    node = node.right
                    return node
                } else if (!node.right) {
                    node = node.left
                    return node
                } else {
                    let maxLeft = node.left
                    while (maxLeft.right) {
                        maxLeft = maxLeft.right
                    }
                    node.data = maxLeft.data
                    node.left = removeSmth(node.left, maxLeft.data)
                    return node
                }
            }
        }
    }

    min() {
        if (!this.rootTree) {
            return
        }
        let node = this.rootTree
        while (node.left) {
            node = node.left
        }
        return node.data
    }

    max() {
        if (!this.rootTree) {
            return
        }
        let node = this.rootTree
        while (node.right) {
            node = node.right
        }
        return node.data
    }
}

module.exports = {
    BinarySearchTree
};
