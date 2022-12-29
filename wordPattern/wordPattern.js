
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
      // Create an empty object
  let map = {};

  // Split the string s into an array of words
  let words = s.split(" ");

  // Check that the length of the pattern is equal to the length of the array of words
  if (pattern.length !== words.length) {
    return false;
  }

  // Iterate through the pattern and the array of words
  for (let i = 0; i < pattern.length; i++) {
    // Get the current letter and word
    let letter = pattern[i];
    let word = words[i];

    // Check if the letter is not in the object
    if (!(letter in map)) {
      // Check if the word is already mapped to a different letter in the object
      if (Object.values(map).includes(word)) {
        return false;
      }

      // Add the letter-word mapping to the object
      map[letter] = word;
    } else {
      // Check if the word does not match the mapping for the letter in the object
      if (map[letter] !== word) {
        return false;
      }
    }
  }

  // Return true if the pattern and string s match
  return true;
};