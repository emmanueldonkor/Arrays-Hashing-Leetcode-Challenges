/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0) {
      return [obj[nums[i]], i];
      console.log(obj[nums[i]]);
    }
    obj[target - nums[i]] = i;
  }
};

/*Raw code explanation

This code is defining a function called twoSum that takes in two arguments: an array of numbers called nums and a number called target.

The function begins by creating an empty object called obj. It then enters a loop that iterates over the elements in the nums array. For each iteration of the loop, the code does the following:

If the current element nums[i] exists as a key in the obj object, the function returns an array containing the value of obj[nums[i]] (which is the index of the element in the nums array) and the current index i.

If the current element does not exist as a key in the obj object, the code adds a new key-value pair to the obj object, where the key is target - nums[i] and the value is the current index i.

The purpose of this function is to find two numbers in the nums array that add up to the target number. The function uses the obj object to store the indices of elements that have not yet been paired with another element that adds up to the target. 
When the function finds an element that can be paired with another element to add up to the target, it returns the indices of these elements.


*/

console.log(twoSum([1,2,3,5,6,12,23], 9));
