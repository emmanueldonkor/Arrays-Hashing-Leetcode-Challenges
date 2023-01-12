// Define the rotate function
function rotate(nums, k) {
  // Get the effective rotation value by taking the modulus of the length of the array with k
  k = k % nums.length;
  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);
  // Reverse the first k elements of the array
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements of the array
  reverse(nums, k, nums.length - 1);
}

// Define the reverse function
function reverse(nums, start, end) {
  // While the start index is less than the end index
  while (start < end) {
    // Swap the element at the start index with the element at the end index
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    // Increment the start index and decrement the end index
    start++;
    end--;
  }
}

// Test the rotate function
let nums = [1, 2, 3, 4, 5];
rotate(nums, 2);
console.log(nums);
