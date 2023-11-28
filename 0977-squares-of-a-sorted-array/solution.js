function sortedSquares(nums) {
    // Get the length of the input array
    const n = nums.length;

    // Create an array to store the result
    const result = new Array(n);

    // Initialize two pointers, one at the beginning (left) and one at the end (right) of the array
    let left = 0;
    let right = n - 1;

    // Initialize an index to fill the result array from the end to the beginning
    let index = n - 1;

    // Loop until the pointers meet or cross
    while (left <= right) {
        // Calculate the squares of the numbers at both ends
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;

        // Compare the squares and fill the result array accordingly
        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }

        // Move to the next index in the result array
        index--;
    }

    // Return the sorted array of squares
    return result;
};
