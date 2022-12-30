function productExceptSelf(nums) {
  // Calculate the product of all the elements in the array
  let product = 1;
  for (const num of nums) {
    product *= num;
  }

  // Divide the product by each element to get the result
  const result = [];
  for (const num of nums) {
    result.push(product / num);
  }
  return result;
}
