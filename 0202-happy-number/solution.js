function isHappy(n) {
    // Set to store seen numbers during the process
    const seen = new Set();

    // Continue the process until the number becomes 1 or a cycle is detected
    while (n !== 1 && !seen.has(n)) {
        // Add the current number to the set
        seen.add(n);
        // Update the number with the sum of squares of its digits
        n = getSumOfSquares(n);
    }

    // Return true if the number becomes 1, indicating it is happy
    return n === 1;
}

function getSumOfSquares(num) {
    let sum = 0;

    // Extract each digit, square it, and add to the sum
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    return sum;
}
