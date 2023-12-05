function heightChecker(heights: number[]): number {
  // Create a sorted copy of the heights array
  const sortedHeights = [...heights].sort((a, b) => a - b);

  // Initialize the mismatch count
  let mismatchCount = 0;

  // Iterate through the heights array
  for (let i = 0; i < heights.length; i++) {
    // Compare the current height with the corresponding sorted height
    if (heights[i] !== sortedHeights[i]) {
      // Increment the mismatch count if there is a difference
      mismatchCount++;
    }
  }

  // Return the final mismatch count
  return mismatchCount;
}
