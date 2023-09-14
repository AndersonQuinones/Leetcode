function reverseString(s: string[]): void {
    // Initialize two pointers, one at the beginning and one at the end of the array
    let left: number = 0;
    let right: number = s.length - 1;

    // Iterate through the array until the left pointer is less than the right pointer
    while (left < right) {
        // Swap the characters at the left and right pointers
        const temp: string = s[left];   // Store the character at the left pointer in a temporary variable
        s[left] = s[right];             // Replace the character at the left pointer with the character at the right pointer
        s[right] = temp;                // Replace the character at the right pointer with the temporary character

        // Move the pointers toward the center of the array
        left++;                         // Move the left pointer one step to the right
        right--;                        // Move the right pointer one step to the left
    }
}
