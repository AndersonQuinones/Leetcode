function sortColors(nums) {
    // Initialize pointers for each color: red (0), white (1), and blue (2)
    let start = 0;       // Pointer for red color (0)
    let current = 0;     // Pointer for iterating through the array
    let end = nums.length - 1;  // Pointer for blue color (2)

    // Iterate through the array until the current pointer crosses the end pointer
    while (current <= end) {
        // If the current element is 0 (red)
        if (nums[current] === 0) {
            // Swap the current element with the element at the start pointer
            [nums[current], nums[start]] = [nums[start], nums[current]];
            // Move both start and current pointers to the right
            start++;
            current++;
        }
        // If the current element is 1 (white), simply move the current pointer to the right
        else if (nums[current] === 1) {
            current++;
        }
        // If the current element is 2 (blue)
        else {
            // Swap the current element with the element at the end pointer
            [nums[current], nums[end]] = [nums[end], nums[current]];
            // Move the end pointer to the left (decrement)
            end--;
        }
    }

    // Return the sorted array
    return nums;
}
