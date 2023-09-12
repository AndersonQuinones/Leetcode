function lengthOfLastWord(s: string): number {
    let length = 0;         // Initialize a variable to store the length of the last word.
    let i = s.length - 1;   // Start from the right end of the string.

    // Skip trailing spaces from the end of the string.
    while (i >= 0 && s[i] === ' ') {
        i--; // Decrement the index if a space character is encountered.
    }

    // Count characters until the next space or the beginning of the string.
    while (i >= 0 && s[i] !== ' ') {
        length++; // Increment the length for each non-space character.
        i--;      // Move to the previous character.
    }

    return length; // Return the length of the last word.
}
