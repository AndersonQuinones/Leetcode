function makeEqual(words) {
    // Create an array to store the count of each character
    const charCount = new Map();

    // Count the occurrences of each character in all strings
    for (const word of words) {
        for (const char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }

    // Check if all character counts are divisible by the number of words
    for (const count of charCount.values()) {
        if (count % words.length !== 0) {
            return false;
        }
    }

    return true;
}
