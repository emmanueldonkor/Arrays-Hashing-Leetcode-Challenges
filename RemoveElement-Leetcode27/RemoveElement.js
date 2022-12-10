/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    //Check if numbers in the array is not equal val(the value we are removing)
    //then set the pointer to the current nums array and increase the pointer
    //return the pointer
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
};

//Space complexity O(1)
//Time complexity O(n)

//nums: [3,2,2,3] val = 3;
//output = [2,2];
