/**
 * Class for creating a new node
 */
class Node {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

/**
 * Class for creating a new linked list
 */
class LinkedList {
  /**
   * Create a new linked list
   * @param {Array} items - The items to initialize the linked list with
   */
  constructor(...items) {
    this.head = null;
    this.size = 0;

    items.forEach((item) => {
      let newNode = new Node(item, null);

      // If linked list is empty
      if (!this.head) {
        this.head = newNode;
      } else {
        let lastNode = this.last();
        if (lastNode == null) {
          this.head = newNode;
        } else {
          lastNode.next = newNode;
        }
      }

      this.size++;
    });
  }

  /**
   * Adds a new node to the linked list at the last position
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @param {number} val The value of the new that will be added
   */
  append(val) {
    const newNode = new Node(val);

    // If linked list is empty
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;

      // Iterating to the last node in the linked list
      while (temp && temp.next != null) {
        temp = temp.next;
      }

      // Attaching the new node to the last node in the linked list
      temp.next = newNode;
    }
    this.size++;
  }

  /**
   * Returns the last node in the linked list
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   * @return {number} The node at the end of the linked list
   */
  last() {
    let temp = this.head;
    if (this.head == null) {
      return null;
    }
    while (temp && temp.next != null) {
      temp = temp.next;
    }
    return temp;
  }

  /**
   * Reverse the linked list
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   */
  reverse() {
    let prev = null,
      curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  /**
   * Prints all the items in the linked list
   * !Time Complexity: O(n)
   * !Space Complexity: O(1)
   */
  print() {
    let res = [];
    let temp = this.head;

    if (this.size == 0) {
      console.log("List: ", null);
    } else {
      while (temp) {
        res.push(temp.value);
        temp = temp.next;
      }
      console.log("List: ", res.join(" --> "));
    }
  }
}

const list = new LinkedList(1, 2, 3, 4, 5);

list.print();

list.append(21);
list.append(53);

console.log("\nAdding 21 and 53 to the list");
list.print();

console.log("\nReversing the list");
list.reverse();
list.print();
