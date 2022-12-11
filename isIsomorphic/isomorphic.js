/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  //Using hashmap to map values
  const hash1 = {};
  const hash2 = {};
  //loop through the s string since all have same length
  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];
    if (
      (c1 in hash1 && hash1[c1] !== c2) ||
      (c2 in hash2 && hash2[c2] !== c1)
    ) {
      return false;
    }
    hash1[c1] = c2;
    hash2[c2] = c1;
  }
  return true;
};
