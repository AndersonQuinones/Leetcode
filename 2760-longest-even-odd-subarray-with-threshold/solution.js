var longestAlternatingSubarray = function(nums, threshold) {
    let result = 0; // Variable to store the length of the longest alternating subarray
    let counter = 0; // Counter to keep track of the alternating pattern length

    for (const num of nums) {
        if (num > threshold) {
            counter = 0; // Reset counter if the current number is greater than the threshold
            continue; // Skip the rest of the loop and move to the next iteration
        }
        
        // Check if the parity of the current number matches the parity of the counter
        if (num % 2 === counter % 2) {
            ++counter; // Increment the counter if parities match
        } else {
            counter = num % 2 === 0 ? 1 : 0; // Start a new alternating pattern
        }
        
        // Update the result with the maximum of the current result and counter
        result = Math.max(result, counter);
    }
    
    return result; // Return the length of the longest alternating subarray
};
