/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;

  /*
     for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }
    let rightSum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
  */
};
