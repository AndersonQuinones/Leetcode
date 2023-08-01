var leftRightDifference = function(nums) {
  let answer = new Array(nums.length).fill(0); // Create an array to store the differences, initialized with zeros
  let right = nums.reduce((acc, curr) => acc + curr, 0); // Calculate the total sum of all elements in nums and assign it to the right variable
  let left = 0; // Initialize the left variable as 0

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i]; // Update the right variable by subtracting the current element nums[i]

    answer[i] = Math.abs(right - left); // Calculate the absolute difference between right and left and store it in the answer array

    left += nums[i]; // Update the left variable by adding the current element nums[i]
  }

  return answer; // Return the array containing the left-right differences
};
