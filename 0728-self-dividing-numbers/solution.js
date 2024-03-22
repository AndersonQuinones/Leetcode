function divideByDigit(n) {
    let originalNumber = n; // Store the original number for reference
    while (n > 0) { // Continue until all digits have been processed
        const digit = n % 10; // Extract the last digit of the number
        if (digit === 0 || originalNumber % digit !== 0) { // Check if the digit is zero or if the number is not divisible by the digit
            return false; // If the conditions are met, the number is not self-dividing, so return false
        }
        n = Math.floor(n / 10); // Move to the next digit by removing the last digit from the number
    }
    return true; // If all digits are checked and the number is divisible by each digit, return true, indicating that the number is self-dividing
}

function selfDividingNumbers(left, right) {
    let result = []; // Initialize an empty array to store the self-dividing numbers

    for (let i = left; i <= right; i++) { // Iterate through each number in the specified range
        if (divideByDigit(i)) { // Check if the current number is self-dividing
            result.push(i); // If it is self-dividing, add it to the result array
        }
    }

    return result; // Return the array containing all self-dividing numbers within the specified range
}
