var arrayStringsAreEqual = function(word1, word2) {
    let pointer1 = 0; // Initialize the first pointer to 0 for word1
    let pointer2 = 0; // Initialize the second pointer to 0 for word2
    let charIndex1 = 0; // Initialize a variable to track the character index in word1
    let charIndex2 = 0; // Initialize a variable to track the character index in word2

    while (pointer1 < word1.length && pointer2 < word2.length) {
        // Compare characters in word1 and word2 at the current character index
        if (word1[pointer1][charIndex1] !== word2[pointer2][charIndex2]) {
            return false;
        }

        charIndex1++; // Move to the next character in word1
        charIndex2++; // Move to the next character in word2

        // If we have reached the end of the current word in word1, move to the next word
        if (charIndex1 === word1[pointer1].length) {
            pointer1++;
            charIndex1 = 0;
        }

        // If we have reached the end of the current word in word2, move to the next word
        if (charIndex2 === word2[pointer2].length) {
            pointer2++;
            charIndex2 = 0;
        }
    }

    // Check if both pointers have reached the end of their respective arrays
    return pointer1 === word1.length && pointer2 === word2.length;
};
