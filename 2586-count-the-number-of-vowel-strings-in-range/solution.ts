// Helper function to check if a character is a vowel
function isVowel(char: string): boolean {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

// Main function to count vowel strings in the given range [left, right] of the input array
function vowelStrings(words: string[], left: number, right: number): number {
    let count = 0; // Initialize a count variable to keep track of vowel strings

    // Iterate through the specified range [left, right]
    for (let i = left; i <= right; i++) {
        const word = words[i]; // Get the current word in the array

        // Check if the word starts and ends with a vowel character
        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            count++; // Increment the count if it's a vowel string
        }
    }

    return count; // Return the total count of vowel strings in the range
};
