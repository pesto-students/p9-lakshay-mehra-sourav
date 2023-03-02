/**
 * Checks if an array has duplicate items
 * @param {Array} array The array which needs to be checked for duplicate items
 * @returns {Boolean} Result of the check
 */
function hasDuplicate(array) {
  return array.length != new Set(array).size;
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 9, 0];
let array2 = [1, 2, 3, 4, 5, 6, 7, 9, 1];
let result1 = hasDuplicate(array1);
let result2 = hasDuplicate(array2);
console.log("Does the first array contain duplicates:", result1);
console.log("Does the second array contain duplicates:", result2);
