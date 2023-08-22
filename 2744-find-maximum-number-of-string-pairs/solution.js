var maximumNumberOfStringPairs = function(words) {
    const map = new Map(); // Create a map to store reversed words along with their counts
    let count = 0; // Initialize a counter for the maximum number of pairs

    for (const word of words) {
        const reverse = word.split('').reverse().join(''); // Calculate the reversed version of the current word

        if (map.has(reverse)) { // If the reversed word exists in the map, it forms a valid pair
            ++count; // Increment the count of pairs
            map.delete(reverse); // Remove the used reversed word from the map
        } else {
            map.set(word, 1); // Otherwise, add the current word to the map for potential pairing
        }
    }

    return count; // Return the maximum number of pairs
};
