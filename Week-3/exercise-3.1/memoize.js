// Exercise 3.1
// Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have
// to compute the same inputs more than once. The function will take an unspecified number of integer inputs
// and a reducer method.

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    let key = args.toString();

    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = args.reduce(fn, 0);
    cache.set(key, result);
    return result;
  };
};

// Reducer method
const add = (a, b) => {
  return a + b;
};

// Helper function to show time take taken by function call to complete
const memoizeTime = (fn) => {
  console.time();
  fn();
  console.timeEnd();
};

const memoizeAdd = memoize(add);
memoizeTime(() => memoizeAdd(100, 100));
memoizeTime(() => memoizeAdd(100));
memoizeTime(() => memoizeAdd(100, 200));
memoizeTime(() => memoizeAdd(100, 100));
memoizeTime(() => memoizeAdd(53, 499, 781, 164, 852, 25, 377, 714, 992, 496));
memoizeTime(() => memoizeAdd(53, 499, 781, 164, 852, 25, 377, 714, 992, 496));
memoizeTime(() => memoizeAdd(53, 499, 781, 164, 852, 25, 377, 714, 992, 496));
