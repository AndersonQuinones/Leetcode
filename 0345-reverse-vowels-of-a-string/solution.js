function reverseVowels(s) {
    // Convert the string to an array for easier manipulation
    const chars = s.split('');

    // Helper function to check if a character is a vowel
    const isVowel = (char) => /[aeiouAEIOU]/.test(char);

    // Initialize two pointers, one at the beginning and one at the end of the string
    let left = 0;
    let right = s.length - 1;

    // Continue until the pointers meet or cross
    while (left < right) {
        // Find the next vowel from the left
        while (left < right && !isVowel(chars[left])) {
            left++;
        }

        // Find the next vowel from the right
        while (left < right && !isVowel(chars[right])) {
            right--;
        }

        // Swap the vowels at the left and right pointers
        [chars[left], chars[right]] = [chars[right], chars[left]];

        // Move the pointers towards the center
        left++;
        right--;
    }

    // Convert the array back to a string and return the result
    return chars.join('');
};
