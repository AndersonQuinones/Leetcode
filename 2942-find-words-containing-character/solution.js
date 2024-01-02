function findWordsContaining(words, x) {
    // Initialize an array to store indices
    const result = [];

    // Iterate through the words array
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // Check if the character x is present in the current word
        if (word.includes(x)) {
            // Add the index to the result array
            result.push(i);
        }
    }

    // Return the final result array
    return result;
};
