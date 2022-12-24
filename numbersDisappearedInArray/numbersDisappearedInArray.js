/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const counts = {};
  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }
  const missing = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!counts[i]) {
      missing.push(i);
    }
  }
  return missing;
};
