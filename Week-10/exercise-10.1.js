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
   * Finds the height of a binary search tree
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @param {Node} root The root node of the tree from which height will be
   * calculated
   * @returns {number} The height of the BST
   */
  height(root = this.root) {
    const heightHelper = (rt) => {
      if (rt == null) {
        return 0;
      }
      return 1 + Math.max(heightHelper(rt.left), heightHelper(rt.right));
    };

    return heightHelper(root);
  }
}

/**
 * Calls the height method of the binary search tree class
 * !Time Complexity: O(n)
 * !Space Complexity: O(1)
 * @param {BST} tree The BST class instance of the tree whose maxium depth needs to be calculated
 * @returns {number} The maximum depth of the BST
 */
function maximumDepth(tree) {
  return tree.height();
}

const tree = new BST(3, 1, 2, 4, 5);

console.log("Height of tree:", maximumDepth(tree));
