function countBinarySubstrings(s: string): number {
    let count = 0;
  let prevCount = 0;
  let currCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      // If the current digit is the same as the previous one, increment the current count
      currCount++;
    } else {
      // If the current digit is different, update the count using the minimum of prevCount and currCount
      count += Math.min(prevCount, currCount);
      // Update prevCount to be the current count
      prevCount = currCount;
      // Reset the current count to 1 for the new group
      currCount = 1;
    }
  }

  // Add the minimum of prevCount and currCount for the last group
  count += Math.min(prevCount, currCount);

  return count;
};
