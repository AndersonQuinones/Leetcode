// Helper function to check if a character is alphanumeric
const isAlphanumeric = (char: string): boolean => {
    const code: number = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
};

function isPalindrome(s: string): boolean {
    // Initialize two pointers, 'left' at the beginning and 'right' at the end of the string
    let left: number = 0;
    let right: number = s.length - 1;

    // Iterate while 'left' is less than 'right'
    while (left < right) {
        // Move 'left' pointer to the right until it points to an alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Move 'right' pointer to the left until it points to an alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Check if the characters at 'left' and 'right' (case-insensitive) are not equal
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // If not equal, it's not a palindrome
        }

        // Move the pointers inward
        left++;
        right--;
    }

    // If the loop completes without finding any non-matching characters, it's a palindrome
    return true;
};
