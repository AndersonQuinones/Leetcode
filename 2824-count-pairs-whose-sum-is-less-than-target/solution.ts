function countPairs(nums: number[], target: number): number {
    let count = 0;
    nums.sort((a, b) => a - b); // Sort the array in ascending order.

    let left = 0; // Pointer for the leftmost element.
    let right = nums.length - 1; // Pointer for the rightmost element.

    // Use a two-pointer approach to find valid pairs efficiently.
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            // If the sum of the pair is less than the target, all pairs between left and right are also valid.
            count += right - left;
            left++; // Move the left pointer to the right.
        } else {
            right--; // Move the right pointer to the left.
        }
    }

    return count; // Return the count of valid pairs.
};
