function sortArrayByParity(nums) {
    // Initialize two pointers, 'left' at the beginning and 'right' at the end of the array.
    let left = 0;
    let right = nums.length - 1;

    // Continue until the 'left' pointer is less than the 'right' pointer.
    while (left < right) {
        // Move the 'left' pointer to the right until an odd number is found.
        while (left < right && nums[left] % 2 === 0) {
            left++;
        }

        // Move the 'right' pointer to the left until an even number is found.
        while (left < right && nums[right] % 2 === 1) {
            right--;
        }

        // If 'left' is still less than 'right', swap the even and odd elements.
        if (left < right) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    // The 'nums' array is now modified with even elements at the beginning and odd elements at the end.
    return nums;
};
