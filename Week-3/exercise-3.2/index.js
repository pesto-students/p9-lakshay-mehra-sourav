//Create 3 simple functions where call, bind and apply are used. The intention of this exercise is
//to understand how they work and their differences.

function print(color) {
  console.log(`The ${this.item} is ${color}`);
}

const obj1 = {
  item: "car",
};

const obj2 = {
  item: "fruit",
};

const obj3 = {
  item: "cat",
};

// Using call with obj1 as 'this' context and comma separated arguments
print.call(obj1, "black");

// Using apply with obj2 as 'this' context and arguments as array
print.apply(obj2, ["green"]);

// Using bind with obj3 as 'this' context and comma separated arguments and calling the returned function later
let bindFn = print.bind(obj3, "orange");
bindFn();
