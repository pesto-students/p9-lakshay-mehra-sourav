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

/**
 * Class for creating a new queue implemented using two stacks
 */
class DerivedQueue {
  constructor(...items) {
    this.insertion = new Stack();
    this.deletion = new Stack();

    items.forEach((item) => {
      this.push(item);
    });
  }

  /**
   * Adds a new item to the back of the queue
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   * @param {number} item The new item to be added
   */
  push(val) {
    this.insertion.push(val);
  }

  /**
   * Removes the item at the front of the queue and returns it
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @return {number} The item at the front of the queue
   */
  pop() {
    // Pop all elements from insertion stack to deletion stack for popping item from queue,
    // if deletion stack is empty
    if (this.deletion.isEmpty()) {
      while (!this.insertion.isEmpty()) {
        let item = this.insertion.pop();
        this.deletion.push(item);
      }
    }

    // Else directly pop item from deletion stack
    return this.deletion.pop();
  }

  /**
   * Returns the item at the front of the queue
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @return {number} The item at the front of the queue
   */
  front() {
    // Pop all elements from insertion stack to deletion stack for peeking
    // item at the front of queue, if deletion stack is empty
    if (this.deletion.isEmpty()) {
      while (!this.insertion.isEmpty()) {
        let item = this.insertion.pop();
        this.deletion.push(item);
      }
    }

    // Else directly peek item from deletion stack
    return this.deletion.peek();
  }

  /**
   * Returns the item at the end of the queue
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @return {number} The item at the end of the queue
   */
  rear() {
    // Pop all elements from deletion stack to insertion stack for peeking
    // item at the rear of queue, if insertion stack is empty
    if (this.insertion.isEmpty()) {
      while (!this.deletion.isEmpty()) {
        let item = this.deletion.pop();
        this.insertion.push(item);
      }
    }

    // Else directly peek item from insertion stack
    return this.insertion.peek();
  }

  /**
   * Checks if the queue is empty
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   * @return {number} If the stack is empty
   */
  isEmpty() {
    return this.insertion.length() == 0 && this.deletion.length() == 0;
  }

  print() {
    let queue = [
      ...this.insertion.stack,
      [...this.deletion.stack].reverse(),
    ].join(" ");
    console.log(queue);
  }

  length() {
    return this.insertion.length() + this.deletion.length();
  }
}

const queue = new DerivedQueue(1, 2, 3, 4, 5);

queue.print();
console.log("Length of queue:", queue.length());
queue.push(21);
queue.push(53);

console.log("\n");
queue.print();
console.log("Length of queue:", queue.length());

console.log("\nLength of queue popping:", queue.length());
console.log("Popped item:", queue.pop());
console.log("Length of queue after popping:", queue.length());

console.log("\n");
queue.print();
