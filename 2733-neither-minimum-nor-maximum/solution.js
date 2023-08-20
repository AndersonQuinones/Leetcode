var findNonMinOrMax = function(nums) {
    if (nums.length < 3) {
        return -1; // Not enough distinct numbers to find a valid answer
    }

    let min = Infinity; // Initialize the minimum value to positive infinity
    let secondMin = Infinity; // Initialize the second smallest value to positive infinity

    for (const num of nums) {
        if (num < min) {
            // Update secondMin to the previous min value
            secondMin = min;
            // Update min to the current num value, as it's smaller than the current min
            min = num;
        } else if (num < secondMin && num !== min) {
            // Update secondMin only if the current num is smaller than the previous secondMin
            // and not equal to the min value to avoid duplicates
            secondMin = num;
        }
    }

    // Return the second smallest value if found, otherwise return -1
    return secondMin !== Infinity ? secondMin : -1;
};
