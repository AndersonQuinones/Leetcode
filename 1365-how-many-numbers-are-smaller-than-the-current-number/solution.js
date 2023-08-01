var smallerNumbersThanCurrent = function(nums) {
  // Find the maximum number in the array to determine the counting array size
  const maxNum = Math.max(...nums);

  // Initialize the counting array with all values set to 0
  const countArray = new Array(maxNum + 1).fill(0);

  // Count the occurrences of each number in nums
  for (let num of nums) {
    countArray[num]++;
  }

  // Accumulate the count to get the number of elements smaller than or equal to each number
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  // Calculate the number of elements smaller than each element in the original array
  const result = [];
  for (let num of nums) {
    // For each number in the original array, get the count of elements smaller than it
    // If the number is 0, there are no smaller elements, so push 0 to the result array
    // Otherwise, push the count of smaller elements (countArray[num - 1]) to the result array
    result.push(num === 0 ? 0 : countArray[num - 1]);
  }

  return result;
};
