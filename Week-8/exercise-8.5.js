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

  /**
   * Checks if the stack is empty
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   * @return {number} If the stack is empty
   */
  isEmpty() {
    return this.length() == 0;
  }
}

function nextGreaterElement(arr) {
  let result = new Array(arr.length).fill(-1);
  const stack = new Stack();
  for (let i = 0; i < result.length; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] <= arr[i]) {
      let idx = stack.pop();
      result[idx] = arr[i];
    }
    stack.push(i);
  }

  console.log("\nOriginal array:", arr);
  console.log("Next Greater Element result:", result);
}

const stack = new Stack(1, 2, 3, 4, 5);

const arr1 = [1, 3, 2, 4];
const arr2 = [6, 8, 0, 1, 3];

nextGreaterElement(arr1);
nextGreaterElement(arr2);
