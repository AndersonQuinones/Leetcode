function isPalindrome(x: number): boolean {
    // Check if 'x' is negative or ends with zero (except when 'x' is 0 itself).
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        // If any of the conditions are met, return false, as it can't be a palindrome.
        return false;
    }

    // Initialize a variable 'reversed' to store the reversed number.
    let reversed = 0;

    // Create a copy of 'x' to manipulate and check for palindromes.
    let y = x;

    // Start a loop that continues until 'y' becomes 0.
    while (y > 0) {
        // Extract the last digit of 'y'.
        const lastDigit = y % 10;

        // Add the last digit to 'reversed', shifting the previous digits to the left.
        reversed = (reversed * 10) + lastDigit;

        // Remove the last digit from 'y' using integer division.
        y = Math.floor(y / 10); 
    }

    // Check if the reversed number 'reversed' is equal to the original number 'x'.
    return x === reversed;
};
