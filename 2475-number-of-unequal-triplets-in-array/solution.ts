function unequalTriplets(nums: number[]): number {
  // Calculate the total number of triplets using combinations formula.
  const n = nums.length;
  let res = (n * (n - 1) * (n - 2)) / 6;

  // Create a frequency map to count occurrences of each number.
  const freq: Record<number, number> = {};

  // Count the occurrences of each number in the input array.
  for (const num of nums) {
    freq[num] = (freq[num] ?? 0) + 1;
  }

  // Iterate through the frequency map to exclude certain triplets.
  for (const f of Object.values(freq)) {
    // Exclude triplets with the same number 3 times (combinations).
    res -= (f * (f - 1) * (f - 2)) / 6;
    
    // Exclude triplets with the same number 2 times (combinations).
    // Also consider the remaining options for the last element.
    res -= (f * (f - 1) / 2) * (n - f);
  }

  // The result 'res' now represents the count of valid triplets.
  return res;
}
