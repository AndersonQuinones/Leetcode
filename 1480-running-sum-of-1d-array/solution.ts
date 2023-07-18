var runningSum = function(nums) {
  let sum = 0; // Initialize the sum variable to keep track of the running sum

  // Use the map function to iterate over each element in the nums array
  // Calculate the running sum by adding the current element to the sum
  // Update the sum variable for each iteration
  return nums.map((num) => (sum += num));
};
