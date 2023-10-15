function findShortestSubArray(nums: number[]): number {
    // Create a map to store the count of each element.
    const numToCount = new Map<number, number>();
    // Create a map to store the first index of each element.
    const numToFirstIndex = new Map<number, number>();
    let maxDegree = 0; // Initialize the maximum degree to 0.
    let minLength = nums.length; // Initialize the minimum length to the length of the input array.

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!numToFirstIndex.has(num)) {
            // If the element is not in numToFirstIndex, set its first index.
            numToFirstIndex.set(num, i);
        }
        // Update the count of the element in numToCount.
        numToCount.set(num, (numToCount.get(num) || 0) + 1);

        if (numToCount.get(num) > maxDegree) {
            // If the current element has a higher count than the maxDegree, update maxDegree and minLength.
            maxDegree = numToCount.get(num);
            minLength = i - numToFirstIndex.get(num) + 1;
        } else if (numToCount.get(num) === maxDegree) {
            // If the current element has the same count as maxDegree, update minLength if needed.
            minLength = Math.min(minLength, i - numToFirstIndex.get(num) + 1);
        }
    }

    return minLength;
}
