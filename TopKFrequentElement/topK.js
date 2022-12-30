var topKFrequent = function (nums, k) {
  // Step 1: Create a map to store the frequency of each element
  const frequency = {};
  for (const elem of nums) {
    frequency[elem] = frequency[elem] + 1 || 1;
  }

  // Step 2: Create an array of arrays to store the elements with the same frequency
  const buckets = [];
  for (const [elem, count] of Object.entries(frequency)) {
    if (!buckets[count]) {
      buckets[count] = [];
    }
    buckets[count].push(elem);
  }

  // Step 3: Iterate over the buckets in reverse order and add the elements to the result array
  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const elem of buckets[i] || []) {
      result.push(elem);
      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
};
