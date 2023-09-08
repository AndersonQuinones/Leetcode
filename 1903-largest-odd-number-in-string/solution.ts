function largestOddNumber(num: string): string {
    // Start iterating from the rightmost character of the string.
    for (let i = num.length - 1; i >= 0; i--) {
        const digit = parseInt(num[i]);

        // Check if the digit is odd.
        if (digit % 2 === 1) {
            // If an odd digit is found, return the substring from the beginning of the string to this position.
            return num.slice(0, i + 1);
        }
    }

    // If no odd digit is found, return an empty string.
    return "";
};
