function countSetBits(num: number): number {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}

function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let result = 0;

    // Iterate through each index and check if it has k set bits
    for (let i = 0; i < nums.length; i++) {
        // Count set bits in the binary representation of the current index
        const setBitsCount = countSetBits(i);

        // If the count of set bits matches k, add the corresponding element to the result
        if (setBitsCount === k) {
            result += nums[i];
        }
    }

    return result;
}
