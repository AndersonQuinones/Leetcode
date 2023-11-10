function countConsistentStrings(allowed: string, words: string[]): number {
    let consistentCount = 0;

    // Iterate through each word in the array
    for (const word of words) {
        // Check if the current word is consistent
        if (isConsistent(word, allowed)) {
            consistentCount++;
        }
    }

    return consistentCount;
}

function isConsistent(word: string, allowed: string): boolean {
    // Iterate through each character in the word
    for (const char of word) {
        // Check if the character is not present in the allowed string
        if (!allowed.includes(char)) {
            return false;
        }
    }

    // All characters in the word are present in the allowed string
    return true;
}
