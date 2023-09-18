function largestK(nums: number[]): number {
  // Create a set to store unique numbers from the input array
  const numSet = new Set(nums);
  // Initialize the largest variable to -1
  let largest = -1;

  // Iterate through each number in the input array
  for (const num of nums) {
    // Check if the negative of the current number (-num) exists in the set
    // and if the current number (num) is larger than the current largest value
    if (numSet.has(-num) && num > largest) {
      // Update the largest value
      largest = num;
    }
  }

  // Check if a positive value was found as the largest k
  // If found, return the positive k; otherwise, return -1
  return largest > 0 ? largest : -1;
};
