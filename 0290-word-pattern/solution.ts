function wordPattern(pattern: string, s: string): boolean {
    const patternToWord = new Map<string, string>();
    const wordToPattern = new Map<string, string>();

    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        const currentPatternChar = pattern[i];
        const currentWord = words[i];

        // Check if there is a mismatch between pattern and word mappings.
        if (
            (patternToWord.has(currentPatternChar) &&
                patternToWord.get(currentPatternChar) !== currentWord) ||
            (wordToPattern.has(currentWord) &&
                wordToPattern.get(currentWord) !== currentPatternChar)
        ) {
            return false;
        }

        // Create mappings between pattern character and word, and vice versa.
        patternToWord.set(currentPatternChar, currentWord);
        wordToPattern.set(currentWord, currentPatternChar);
    }

    return true;
};
