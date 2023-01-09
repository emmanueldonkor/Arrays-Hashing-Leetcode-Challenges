/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // Initialize "left" pointer at the beginning of the array
  let left = 0;
  // Initialize "right" pointer at the end of the array
  let right = numbers.length - 1;

  // Loop as long as "left" is less than "right"
  while (left < right) {
    // Calculate sum of numbers at "left" and "right" pointers
    sum = numbers[left] + numbers[right];
    // If sum is equal to target, return 1-indexed indices of the two numbers
    if (sum === target) {
      return [left + 1, right + 1];
    }
    // If sum is greater than target, move "right" pointer one position to the left
    if (sum > target) {
      right -= 1;
    }
    // If sum is less than target, move "left" pointer one position to the right
    else {
      left += 1;
    }
  }
  // If no two numbers add up to target, return empty array
  return [];
};
