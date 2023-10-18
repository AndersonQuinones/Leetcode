function findLHS(nums: number[]): number {
    const numCount = new Map<number, number>();
    let maxLen = 0;

    // Count the frequency of each number in the array.
    for (const num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    // Iterate through the unique numbers in the array.
    for (const num of numCount.keys()) {
        if (numCount.has(num + 1)) {
            // Calculate the length of the harmonious subsequence.
            const len = numCount.get(num) + numCount.get(num + 1);
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
}
