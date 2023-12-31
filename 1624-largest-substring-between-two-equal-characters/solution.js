function maxLengthBetweenEqualCharacters(s) {
    // Create an object to store the last index of each character in the string
    const lastIndex = {};

    // Initialize the maximum length to -1
    let maxLength = -1;

    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Check if the character has been seen before
        if (lastIndex[char] !== undefined) {
            // Update the maximum length with the current substring length
            maxLength = Math.max(maxLength, i - lastIndex[char] - 1);
        } else {
            // Record the index of the current character
            lastIndex[char] = i;
        }
    }

    // Return the final result
    return maxLength;
}
