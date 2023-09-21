function findTheArrayConcVal(nums: number[]): number {
    // Initialize the result to 0.
    let result = 0;

    // Continue the loop until the 'nums' array is empty.
    while (nums.length > 0) {
        // If there's only one element left in 'nums', add its value to the result and remove it.
        if (nums.length === 1) {
            result += nums[0];
            nums.pop();
        } else {
            // Calculate the concatenation of the first and last elements in 'nums'.
            const concatenation = Number(nums[0].toString() + nums[nums.length - 1].toString());
            
            // Add the concatenation value to the result.
            result += concatenation;
            
            // Remove the first and last elements from 'nums'.
            nums.shift();
            nums.pop();
        }
    }

    // Return the final concatenation value.
    return result;
};
