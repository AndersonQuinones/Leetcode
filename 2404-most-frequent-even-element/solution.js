function map(nums) {
    const map = new Map();

    for (const num of nums) {
        if (num % 2 === 0) { // Check if the number is even
            map.set(num, (map.get(num) ?? 0) + 1); // Increment the count for each even number
        }
    }

    return map;
}

function mostFrequentEven(nums) {
    const frequencyMap = map(nums); // Create a frequency map of even elements
    let result = -1; // Initialize the result to -1 (default if there are no even elements)
    let maxFrequency = 0; // Initialize the maximum frequency to 0

    // Iterate through the entries of the frequency map
    for (const [key, value] of frequencyMap) {
        // Check if the current frequency is greater than the maximum frequency or
        // if it's equal but the current key is smaller (for tie-breaking)
        if (value > maxFrequency || (value === maxFrequency && key < result)) {
            result = key; // Update the result to the current key
            maxFrequency = value; // Update the maximum frequency
        }
    }

    return result; // Return the most frequent even element (or -1 if none)
};
