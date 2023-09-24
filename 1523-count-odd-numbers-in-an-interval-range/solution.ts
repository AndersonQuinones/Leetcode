function countOdds(low: number, high: number): number {
    // Ensure low is odd
    if (low % 2 === 0) {
        low++; // If low is even, increment it to the next odd number
    }
    
    // Ensure high is odd
    if (high % 2 === 0) {
        high--; // If high is even, decrement it to the nearest odd number
    }
    
    // Calculate the count of odd numbers in the range [low, high]
    const oddCount = (high - low) / 2 + 1;

    return oddCount;
};
