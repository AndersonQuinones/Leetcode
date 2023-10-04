function findMaxConsecutiveOnes(nums: number[]): number {
  // Initialize variables to keep track of the maximum consecutive ones and the current consecutive ones.
  let maxCount = 0;
  let currentCount = 0;

  // Iterate through the input array.
  for (const num of nums) {
    // If the current number is 1, increment the current consecutive ones count.
    if (num === 1) {
      currentCount++;
      // Update the maximum count if the current count exceeds it.
      maxCount = Math.max(maxCount, currentCount);
    } else {
      // If the current number is not 1, reset the current consecutive ones count to 0.
      currentCount = 0;
    }
  }

  // Return the maximum consecutive ones count found in the array.
  return maxCount;
}
