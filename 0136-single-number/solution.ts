function singleNumber(nums: readonly number[]): number {
  // Using the XOR operator to find the single number
  return nums.reduce((a, b) => a ^ b);
}
