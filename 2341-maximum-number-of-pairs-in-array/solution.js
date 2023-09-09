var numberOfPairs = function(nums) {
    // Create a frequency map to count the occurrences of each integer
    const frequencyMap = new Map();
    for (const num of nums) {
        if (frequencyMap.has(num)) {
            // Increment the count if the number is already in the map
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            // Initialize the count to 1 if the number is not in the map
            frequencyMap.set(num, 1);
        }
    }

    let pairsCount = 0; // Initialize a count for pairs
    let leftovers = 0; // Initialize a count for leftover integers

    // Iterate through the frequency map to calculate pairs and leftovers
    for (const [num, frequency] of frequencyMap.entries()) {
        pairsCount += Math.floor(frequency / 2); // Count pairs formed by dividing frequency by 2
        leftovers += frequency % 2; // Count leftover integers (remainder when divided by 2)
    }

    // Return the result as an array of pairs count and leftover count
    return [pairsCount, leftovers];
};
