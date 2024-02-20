function sumOfUnique(nums: number[]): number {
    const numCounts: Map<number, number> = new Map(); // Map to store count of each number

    // Count occurrences of each number in the array
    for (const num of nums) {
        numCounts.set(num, (numCounts.get(num) || 0) + 1);
    }

    let sum = 0;

    // Iterate through the map and add unique elements to the sum
    for (const [num, count] of numCounts.entries()) {
        if (count === 1) {
            sum += num;
        }
    }

    return sum;
};
