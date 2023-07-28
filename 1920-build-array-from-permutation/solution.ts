var buildArray = function(nums) {
  let ans = new Array(); // Create an empty array 'ans' to store the resulting array.

  for (let i = 0; i < nums.length; ++i) {
    ans.push(nums[nums[i]]); // For each index 'i' in 'nums', find the value at index 'nums[i]' in 'nums' and add it to 'ans'.
  }  

  return ans; // Return the final array 'ans' containing the desired values.
};
