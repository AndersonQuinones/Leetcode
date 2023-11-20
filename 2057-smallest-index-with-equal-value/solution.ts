function smallestEqual(nums: number[]): number {
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if i mod 10 is equal to nums[i]
    if (i % 10 === nums[i]) {
      // If true, return the current index i
      return i;
    }
  }
  // If no such index is found, return -1
  return -1;
}
