function minMaxGame(nums) {
  // Base case: if the length of nums is 1, return the only element.
  if (nums.length === 1) {
    return nums[0];
  }

  // Create a new array newNums to store the results of each round.
  const newNums = [];

  // Iterate through nums by pairs and apply the min-max game.
  for (let i = 0; i < nums.length; i += 2) {
    // Use modulo to determine whether to use Math.min or Math.max.
    const val = i % 4 < 2 ? Math.min(nums[i], nums[i + 1]) : Math.max(nums[i], nums[i + 1]);
    
    // Push the result into newNums.
    newNums.push(val);
  }

  // Recursively call minMaxGame with the newNums array.
  return minMaxGame(newNums);
}
