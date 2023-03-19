/**
 * Class for creating a new stack
 */
class Stack {
  /**
   * Create a new stack
   * @param {Array} items - The items to initialize the stack with
   */
  constructor(...items) {
    this.stack = [];

    items.forEach((item) => {
      this.stack.push(item);
    });
  }

  /**
   * Adds a new item to the top of the stack
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @param {number} item The new item to be added
   */
  push(item) {
    this.stack.push(item);
  }

  /**
   * Removes the item at the top of the stack and returns it
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   * @return {number} The item at the top of the stack
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Returns the item at the top of the stack
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   * @return {number} The item at the top of the stack
   */
  peek() {
    return this.stack.at(-1);
  }

  /**
   * Returns the size of the stack
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   * @return {number} The size of the stack
   */
  length() {
    return this.stack.length;
  }

  // /**
  //  * Prints all the items in the stack
  //  * !Time Complexity: O(n)
  //  * !Space Complexity: O(1)
  //  */
  // print() {
  //   let length = this.stack.length;
  //   for (let i = length - 1; i >= 0; i--) {
  //     console.log(`${this.stack[i]} `);
  //   }
  // }

  // /**
  //  * Searches for a specific item in the stack
  //  * !Time Complexity: O(n)
  //  * !Space Complexity: O(1)
  //  * @param {number} item The items that needs to be searched in the stack
  //  * @return {number} The index where the item is found in the stack
  //  */
  // search(item) {
  //   // let length = this.stack.length;
  //   for (let i = 0; i < this.length(); i++) {
  //     if (this.stack[i] == item) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }
}

/**
 * Checks if bracket is an open bracket
 * @param {string} str Bracket to check
 * @returns {boolean} Whether the bracket is open or not
 */
function isBracketOpen(str) {
  if (["(", "[", "{"].includes(str)) {
    return true;
  }
  return false;
}

/**
 * Checks if provided brackets are of same type
 * @param {string} bracket1 Bracket 1 to check
 * @param {string} bracket2 Bracket 2 to check
 * @returns {boolean} Whether the brackets are of same type or not
 */
function sameTypeCheck(bracket1, bracket2) {
  let bracketPairMaps = {
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
  };
  if (bracket1 === bracket2 || bracket1 === bracketPairMaps[bracket2]) {
    return true;
  }
  return false;
}

/**
 * Checks for validity of bracket pairs in provided string
 * @param {string} string String of bracket pairs
 * @returns {boolean} Whether the bracket pairs are valid or not
 */
function checkBracketPairs(string) {
  const stack = new Stack();

  for (let char of string) {
    // Putting open brackets in stack
    if (isBracketOpen(char)) {
      stack.push(char);
    }
    // If we encounter a close bracket, then we check if the
    // bracket at the top of the stack if of the same type as
    // of current bracket and pop if that's true
    else if (sameTypeCheck(stack.peek(), char)) {
      stack.pop();
    }
  }

  // If the stack is empty at the end, then all the brackets were valid
  if (stack.length() == 0) return true;
  return false;
}

const string1 = "[()]{}{()()}";
const string2 = "[(])";

console.log("Checking string1");
console.log(
  "\tstring1 is has valid bracket pairs:",
  checkBracketPairs(string1)
);

console.log("\nChecking string2");
console.log(
  "\tstring2 is has valid bracket pairs:",
  checkBracketPairs(string2)
);
