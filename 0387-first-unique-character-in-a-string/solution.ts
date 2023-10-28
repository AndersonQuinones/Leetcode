function firstUniqChar(s: string): number {
    const charCount = new Map<string, number>();

    // First, count the occurrences of each character in the string
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Then, find the first character with a count of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1; // Return -1 if no unique character is found
};
