function checkIfPangram(sentence){
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');

    for (const char of sentence) {
        alphabetSet.delete(char);
        if (alphabetSet.size === 0) {
            return true; // All letters found, early exit
        }
    }

    return false; // Not all letters found
};
