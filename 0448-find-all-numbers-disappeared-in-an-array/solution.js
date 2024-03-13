function findDisappearedNumbers(nums) {
    const n = nums.length;
    const result = [];

    // Mark the presence of each number in nums by negating the value at its corresponding index
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        nums[num - 1] = -Math.abs(nums[num - 1]);
    }

    // Any positive number remaining in nums indicates the absence of the corresponding index
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}
