function searchRange(nums, target) {
    // Initialize left pointer to the beginning of the array
    let left = 0;
    // Initialize right pointer to the end of the array
    let right = nums.length - 1;
    // Initialize the result array to store the indices of the target element
    let result = [-1, -1];

    // Perform binary search to find the leftmost occurrence of the target
    while (left <= right) {
        // Check if the element at the left pointer is equal to the target
        if (nums[left] === target) {
            // Update the left index in the result array
            result[0] = left;
            // Exit the loop as the leftmost occurrence is found
            break;
        }
        // Move the left pointer to the right
        left++;
    }

    // Perform binary search to find the rightmost occurrence of the target
    while (left <= right) {
        // Check if the element at the right pointer is equal to the target
        if (nums[right] === target) {
            // Update the right index in the result array
            result[1] = right;
            // Exit the loop as the rightmost occurrence is found
            break;
        }
        // Move the right pointer to the left
        right--;
    }

    // Return the result array containing the indices of the target element
    return result;
}
