class NumArray {
  prefixSum: number[]; // Initialize an array to store the prefix sums.

  constructor(nums: number[]) {
    this.prefixSum = new Array(nums.length + 1); // Create an array for prefix sums, one element longer than the input array.
    this.prefixSum[0] = 0; // Initialize the first prefix sum to 0.

    for (let i = 0; i < nums.length; i++) {
      // Compute prefix sums for the input array.
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
      // The prefix sum at index i+1 includes the sum of elements from 0 to i in the input array.
    }
  }

  sumRange(left: number, right: number): number {
    // To calculate the sum of elements between indices left and right, we use the prefix sums.
    // The sum of elements from left to right is given by the difference between prefixSum[right + 1] and prefixSum[left].
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
};
