function findKOr(nums: number[], k: number): number {
    let result = 0;

    // Iterate over each bit position
    for (let i = 0; i < 32; i++) {
        let count = 0;
        // Count the number of elements where the bit at position i is set
        for (const num of nums) {
            if ((num & (1 << i)) !== 0) {
                count++;
            }
        }
        // If the count is greater than or equal to k, set the bit in the result
        if (count >= k) {
            result |= (1 << i);
        }
    }

    return result;
};
