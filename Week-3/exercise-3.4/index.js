function createStack() {
  const items = [];
  return {
    push(value) {
      items.push(value);
    },
    pop() {
      return items.pop();
    },
    print() {
      console.log("items in stack", items);
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log("Popping out -->", stack.pop());
console.log("Printing stack contents in old fashion", stack.items);
console.log("Printing stack contents in new fashion");
stack.print();
