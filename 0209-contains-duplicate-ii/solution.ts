var containsNearbyDuplicate = function(nums, k) {
    const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {

    if (numMap.has(nums[i])) {
      return true;
    }

    numMap.set(nums[i], true);

    if (i >= k) {
      numMap.delete(nums[i - k]);
    }
  }

  return false;
};
