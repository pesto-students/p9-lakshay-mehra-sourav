/**
 * Class for creating a new tree node
 */
class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Class for creating a new binary search tree
 */
class BST {
  constructor(...items) {
    this.root = null;

    items?.forEach((item) => this.insertNode(item));
  }

  /**
   * Inserts a new node to the binary search tree
   * !Time Complexity: O(logn)
   * !Space Complexity: O(1)
   * @param {Node} root - The root node of the tree where the new node
   * will be inserted
   * @param {number} value - The value of the new node that will be inserted
   */
  insertNode(value) {
    const insertNodeHelper = (root, val) => {
      if (root == null) {
        return new Node(val);
      }

      if (root.value < val) {
        root.right = insertNodeHelper(root.right, val);
      } else if (root.value > val) {
        root.left = insertNodeHelper(root.left, val);
      }

      return root;
    };
    this.root = insertNodeHelper(this.root, value);
  }

  /**
   * Traverses the binary search tree using breadth first search algorithm
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   */
  bfsTraversal() {
    if (this.root == null) {
      return [];
    }

    const queue = [this.root],
      traversalResult = [];

    // Keep traversing until queue is empty
    while (queue.length) {
      let currNode = queue.shift();

      traversalResult.push(currNode.value);

      // Push root node of left subtree to queue (if it exists)
      if (currNode.left) {
        queue.push(currNode.left);
      }

      // Push root node of right subtree to queue (if it exists)
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }

    console.log("BFS Traversasl:", traversalResult);
  }
}

/**
 * Calls the bfsTraversal method of the binary search tree class
 * !Time Complexity: O(n)
 * !Space Complexity: O(1)
 * @param {BST} tree The BST class instance of the tree whose maximum depth needs to be calculated
 */
function levelOrderTraversal(tree) {
  tree.bfsTraversal();
}

const tree = new BST(3, 1, 2, 4, 5);

levelOrderTraversal(tree);
