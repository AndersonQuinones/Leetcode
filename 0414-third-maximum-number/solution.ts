function thirdMax(nums: number[]): number {
    // Initialize three variables to store the first, second, and third maximum numbers
  let firstMax = Number.NEGATIVE_INFINITY;  // Initialize with negative infinity to handle negative numbers
  let secondMax = Number.NEGATIVE_INFINITY;
  let thirdMax = Number.NEGATIVE_INFINITY;

  // Iterate through the array
  for (const num of nums) {
    if (num > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (num < firstMax && num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num < secondMax && num > thirdMax) {
      thirdMax = num;
    }
  }

  // Check if the third maximum exists, if not, return the maximum number
  return thirdMax === Number.NEGATIVE_INFINITY ? firstMax : thirdMax;
};
