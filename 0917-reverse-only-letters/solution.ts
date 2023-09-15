function reverseOnlyLetters(s: string): string {
    // Helper function to check if a character is an English letter
    const isLetter = (char: string) => /[a-zA-Z]/.test(char);

    // Convert the input string into an array of characters
    const chars = s.split('');
    let left = 0;
    let right = chars.length - 1;

    // Iterate using two pointers, moving from the edges towards the center
    while (left < right) {
        // Find the first English letter from the left
        while (left < right && !isLetter(chars[left])) {
            left++;
        }

        // Find the first English letter from the right
        while (left < right && !isLetter(chars[right])) {
            right--;
        }

        // Swap the English letters found at left and right positions
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        // Move the pointers toward the center
        left++;
        right--;
    }

    // Convert the modified character array back into a string
    return chars.join('');
};
