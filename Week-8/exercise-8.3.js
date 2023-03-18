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
   * Detects if the linked list has a loop
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   */
  hasLoop() {
    let slow = this.head;
    // The list can't have a loop if it's empty
    if (this.head == null) {
      return false;
    }
    if (this.head) {
      if (this.length() == 1 && this.head.next != this.head) {
        return false;
      } else {
        let fast = slow.next;

        // Maintaining two pointers (one faster than the other) and iterating
        // them to the end of the list or until they point to the same node
        while (slow != null || fast != null) {
          // If they point to the same node, then that means there IS a loop
          // in the list
          if (slow == fast) {
            return true;
          }
          slow = slow.next;
          fast = fast?.next?.next;
        }

        return false;
      }
    }
  }
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList(1);
const list3 = new SinglyLinkedList(1);
const list4 = new SinglyLinkedList(1, 2, 3, 4, 5);
const list5 = new SinglyLinkedList(1, 2, 3, 4, 5);

// Creating a loop in list3
list3.tail.next = list3.head;

// Creating a loop in list5
list5.tail.next = list5.head;

console.log("List 1 (Empty List)");
console.log("\tDoes list1 have a loop?", list1.hasLoop());

console.log("\nList 2 (Length 1)");
console.log("\tDoes list2 have a loop?", list2.hasLoop());

console.log("\nList 3 (Length 1)");
console.log("\tDoes list3 have a loop?", list3.hasLoop());

console.log("\nList 4 (Length 5)");
console.log("\tDoes list4 have a loop?", list4.hasLoop());

console.log("\nList 5 (Length 5)");
console.log("\tDoes list5 have a loop?", list5.hasLoop());
