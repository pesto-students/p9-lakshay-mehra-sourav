/**
 * Class for creating a new node
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Class for creating a new singly linked list
 */
class SinglyLinkedList {
  /**
   * Create a new linked list
   * @param {Array} items - The items to initialize the linked list with
   */
  constructor(...items) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    items.forEach((item) => {
      let newNode = new Node(item, null);

      // If linked list is empty
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        let lastNode = this.tail;
        if (lastNode == null) {
          this.head = newNode;
          this.tail = this.head;
        } else {
          lastNode.next = newNode;
          this.tail = newNode;
        }
      }

      this.size++;
    });
  }

  /**
   * Adds a new node to the linked list at the last position
   * !Time Complexity: O(1) {O(1) here with tail pointer, else O(n) without tail}
   * !Space Complexity: O(1)
   * @param {number} val The value of the new node that will be added
   */
  append(val) {
    const newNode = new Node(val);

    // If linked list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Attaching the new node to the last node in the linked list
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Prints all the items in the linked list
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   */
  print() {
    let res = [];
    let temp = this.head;

    if (this.length() == 0) {
      console.log("\tList: ", null);
    } else {
      while (temp) {
        res.push(temp.value);
        temp = temp.next;
      }
      console.log("\tList: ", res.join(" --> "));
    }
  }

  /**
   * Returns the length of the linked list
   * !Time Complexity: O(1)
   * !Space Complexity: O(1)
   */
  length() {
    return this.size;
  }

  /**
   * Rotates the a linked list by k nodes
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @param {number} k By how many nodes the linked list will be rotated
   */
  rotate(k) {
    // Do nothing if list is empty or of size 1
    if ([0, 1].includes(this.length())) return;

    let temp = this.head;
    // Rotations can be greater than list length, in which case they'll repeat
    let finalRotationCount = k % this.length();

    if (finalRotationCount != 0) {
      // Iterating the temp pointer until it reaches the kth node
      for (let i = 0; i < finalRotationCount - 1; i++) {
        temp = temp.next;
      }

      this.tail.next = this.head;
      this.tail = temp;
      this.head = temp.next;
      temp.next = null;
    }
  }
  //   1 2 3 4 5
  //   1 *
  // 1 2
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList(1);
const list3 = new SinglyLinkedList(1, 2, 3, 4, 5);

console.log("List 1 (Empty List)");
list1.print();

console.log("\n\tRotating list by 3");
list1.rotate(3);

list1.print();

console.log("\nList 2 (Length 1)");
list2.print();

console.log("\n\tRotating list by 3");
list2.rotate(3);

list2.print();

console.log("\nList 2 (Length 5)");
list3.print();

console.log("\n\tRotating list by 6");
list3.rotate(6);

list3.print();
