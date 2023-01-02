/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  //using frequency counter
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    //if s[i] exists in the object add 1 else initialize to 1
    obj[s[i]] ? (obj[s[i]] += 1) : (obj[s[i]] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    // t[i] does not exist in the obj[s[i]] then return false else deduct one from it and it's not anagram
    if (!obj[t[i]]) return false;
    obj[t[i]] -= 1;
  }
  return true;
};
