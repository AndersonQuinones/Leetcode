var containsDuplicate = function(nums) {
  // Create a new Set from the array, which automatically removes duplicates
  // The size of the Set will be the number of unique elements in the array
  // If the size of the Set is not equal to the length of the array, it means there are duplicates
  return new Set(nums).size !== nums.length;
};
