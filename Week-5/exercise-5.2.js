/**
 * Function to check if a character is a vowel or not
 * @param {String} char A single string character
 */
function isVowel(char) {
  return "aeiou".includes(char);
}

/**
 * Function to count the number of unique vowels in a given string
 * @param {String} string
 * @returns {Map} Map containing vowels with their count
 */
function vowelCount(string) {
  if (typeof string != "string") {
    console.error("The provided string is not a string");
    return;
  }

  let vowelCountMap = new Map();

  // Iterating over each character of the string and placing
  // them in the map accordingly
  for (let char of string) {
    let lowerCaseChar = char.toLowerCase();

    if (isVowel(lowerCaseChar)) {
      // The case when map already has the vowel
      if (vowelCountMap.has(lowerCaseChar)) {
        vowelCountMap.set(lowerCaseChar, vowelCountMap.get(lowerCaseChar) + 1);
      }
      // The case when map doesn't have the vowel
      else {
        vowelCountMap.set(lowerCaseChar, 1);
      }
    }
  }

  return vowelCountMap;
}

let string = "the quick brown fox jumps over the lazy dog";
let vowelCountMap = vowelCount(string);
console.log("Original string:", string);
console.log("Vowel count map:", vowelCountMap);
