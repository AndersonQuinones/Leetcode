function detectCapitalUse(word: string): boolean {
    // Case 1: All letters in the word are capitals
    if (word === word.toUpperCase()) {
        return true;
    }
    
    // Case 2: All letters in the word are not capitals
    if (word === word.toLowerCase()) {
        return true;
    }
    
    // Case 3: Only the first letter is capital
    if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
        return true;
    }
    
    return false;
};
