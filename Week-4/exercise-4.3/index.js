// Fibonacci series iterator
const FibonacciIterator = function (limit) {
  return {
    [Symbol.iterator]: function () {
      // Current number and next number counters
      let curr = 0,
        next = 1,
        limitCounter = 1;
      return {
        next() {
          // Fibonacci series logic
          let value = curr;
          [curr, next] = [next, curr + next];

          // Returning value and done (dynamically
          // set to false when request limit is reached)
          return {
            value,
            done: limitCounter++ > limit,
          };
        },
      };
    },
  };
};

const fiboSeries = FibonacciIterator(15);

// Using the iterator to print values
for (let i of fiboSeries) {
  console.log(i);
}
