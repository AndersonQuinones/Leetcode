function summaryRanges(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        let end = nums[i];

        // Extend the range as long as the next number is consecutive
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
            end = nums[i];
        }

        // Add the range to the result
        result.push(start === end ? start.toString() : start + '->' + end);
    }

    return result;
};
