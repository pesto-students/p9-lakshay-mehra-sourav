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
}

/**
 * Checks if a binary search tree is valid or not
 * !Time Complexity: O(n)
 * !Space Complexity: O(n)
 * @param {BST} tree The BST class instance of the tree whose validity needs to be checked
 * @returns {boolean} Whether the BST is valid or not
 */
function isValidBST(tree) {
  if (tree == null) {
    return true;
  }

  // Helper method to check if a BST is valid using lower and upper bounds
  // to compare value of the root node of subtrees with parent node's value
  const validBSTHelper = (root, lowerBound, upperBound) => {
    // A null tree is also a valid BST
    if (root == null) {
      return true;
    }

    // Immediately returning false if the basic condtion for BST fails
    if (root.value <= lowerBound || upperBound <= root.value) {
      return false;
    }

    // Checking if left and right subtrees are also valid BSTs
    let isLeftChildValidBST = validBSTHelper(root.left, lowerBound, root.value);
    let isRightChildValidBST = validBSTHelper(
      root.right,
      root.value,
      upperBound
    );

    return isLeftChildValidBST && isRightChildValidBST;
  };

  return validBSTHelper(tree.root, -Infinity, Infinity);
}

// Valid BST
const tree = new BST(3, 1, 2, 4, 5);

const tree2 = new BST(3, 1, 2, 4, 5);

// Making 2nd tree invalid
tree2.root.left.right.value = 10;

console.log("Is tree valid?", isValidBST(tree));
console.log("Is tree2 valid?", isValidBST(tree2));
