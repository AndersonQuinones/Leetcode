var isGood = function(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  
  const length = nums.length;

  // Check if each element matches its index + 1
  for (let i = 0; i < length - 1; i++) {
    if (nums[i] !== i + 1) {
      return false; // If not, it's not a good permutation
    }
  }

  // Check the last element if it matches the second-to-last element
  if (nums[length - 1] !== nums[length - 2]) {
    return false; // If not, it's not a good permutation
  }

  // If all checks passed, it's a good permutation
  return true;
};

// Test cases
console.log(isGood([1, 2, 3, 3, 4, 5, 6, 7])); // true
console.log(isGood([1, 2, 3, 4, 5, 6, 7]));    // false
