var containsNearbyDuplicate = function(nums, k) {
  // Create a map to store the elements as keys and their indices as values
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    // If the current element is already in the map, it means we have found a duplicate within the range 'k'
    if (numMap.has(nums[i])) {
      return true;
    }

    // Add the current element to the map with a value of 'true'
    numMap.set(nums[i], true);

    // If the size of the map exceeds the range 'k', remove the element that is 'k' steps behind the current index
    if (i >= k) {
      numMap.delete(nums[i - k]);
    }
  }

  // If no duplicates are found within the range 'k', return false
  return false;
};
