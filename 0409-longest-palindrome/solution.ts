// Function to create a character frequency map
function createCharFrequencyMap(s: string): Map<string, number> {
    const charCount = new Map<string, number>();

    // Count the frequency of each character in the string.
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    return charCount;
}

// Function to find the length of the longest palindrome
function longestPalindrome(s: string): number {
    // Create a character frequency map using the helper function.
    const charCount = createCharFrequencyMap(s);

    let maxLength = 0;        // Initialize the maximum length of the palindrome.
    let hasOddFrequency = false; // Flag to track if there's at least one character with odd frequency.

    // Iterate through the character frequencies.
    for (const frequency of charCount.values()) {
        if (frequency % 2 === 0) {
            // If the frequency is even, add it directly to the maxLength.
            maxLength += frequency;
        } else {
            // If the frequency is odd, add (frequency - 1) to maxLength.
            // Set hasOddFrequency to true to indicate the presence of an odd frequency character.
            maxLength += frequency - 1;
            hasOddFrequency = true;
        }
    }

    // If there's at least one character with odd frequency, add 1 to the maxLength for the center character.
    if (hasOddFrequency) {
        maxLength += 1;
    }

    return maxLength; // Return the length of the longest palindrome.
};
