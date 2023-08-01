var twoSum = function(nums, target) {
  // Create a hash map to store the elements and their corresponding indices
  const numMap = new Map();

  // Iterate through the array to find the pair that adds up to the target
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number needed to reach the target
    const complement = target - nums[i];

    // If the complement is already in the hash map, it means we have found the pair
    // that adds up to the target. Return the indices of the two numbers.
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    // Otherwise, store the current number and its index in the hash map
    numMap.set(nums[i], i);
  }

  // If no such pair is found, return an empty array
  return [];
};
