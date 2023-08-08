var sumOfSquares = function(nums) {
    // Initialize a variable to store the sum of squares
    let result = 0;

    // Get the length of the nums array
    const n = nums.length;

    // Iterate through numbers from 1 to n (inclusive)
    for (let i = 1; i <= n; ++i) {
        // Check if i is a divisor of n
        if (n % i === 0) {
            // If i is a divisor, add the square of nums[i - 1] to the result
            result += nums[i - 1] * nums[i - 1];
        }
    }

    // Return the final result, which represents the sum of squares of special elements
    return result;
};`
