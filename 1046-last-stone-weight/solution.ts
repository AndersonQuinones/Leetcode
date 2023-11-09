function lastStoneWeight(stones: number[]): number {
    // Continue the process until there is only one stone left or no stones at all
    while (stones.length > 1) {
        // Sort the array in descending order to always get the two heaviest stones
        stones.sort((a, b) => b - a);

        // Extract the weights of the two heaviest stones
        const x = stones.shift()!;
        const y = stones.shift()!;

        // If the weights are different, calculate the new weight and push it back into the array
        if (x !== y) {
            stones.push(Math.abs(x - y));
        }
        // If the weights are the same, both stones are destroyed, and nothing is added back to the array
    }

    // Return the weight of the last remaining stone or 0 if there are no stones left
    return stones.length === 1 ? stones[0] : 0;
}
