/**
 * @param {number[]} nums
 * @return {number}
 */
/*
function majorityElement(nums) {
  // Initialize the majority element to the first element in the array
  let majorityElement = nums[0];

  // Initialize the count to 1
  let count = 1;

  // Iterate through the remaining elements in the array
  for (let i = 1; i < nums.length; i++) {
    // If the current element is the same as the majority element, increment the count
    if (nums[i] === majorityElement) {
      count += 1;
    } else {
      // If the current element is different from the majority element, decrement the count
      count -= 1;

      // If the count becomes zero, set the majority element to the current element and reset the count to 1
      if (count === 0) {
        majorityElement = nums[i];
        count = 1;
      }
    }
  }

  return majorityElement;
}
 */

var majorityElement = function (nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] ? (hash[nums[i]] += 1) : (hash[nums[i]] = 1);

    if (hash[nums[i]] > nums.length / 2) return nums[i];
  }
};
