function createTargetArray(nums: number[], index: number[]): number[] {
    const target = [];

  // Iterate through nums and index arrays
  for (let i = 0; i < nums.length; i++) {
    // Insert nums[i] at index[i] in the target array
    target.splice(index[i], 0, nums[i]);
  }

  return target;
};
