var shuffle = function(nums, n) {
    const result = new Array();  // Create an empty array to store the shuffled result

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);     // Push the current element from the first half of nums
        result.push(nums[i + n]); // Push the corresponding element from the second half of nums
    }
    
    return result; // Return the shuffled result array
};
