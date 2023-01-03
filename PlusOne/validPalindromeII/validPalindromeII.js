/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.length <= 1) {
    return true;
  }

  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      // Check if deleting either character makes the string a palindrome
      if (isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)) {
        return true;
      }
      return false;
    }
    i++;
    j--;
  }
  return true;
};

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
