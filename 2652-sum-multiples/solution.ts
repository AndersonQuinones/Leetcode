var sumOfMultiples = function(n) {
    let sum = 0;

    // Loop through numbers from 1 to n (inclusive).
    for (let i = 1; i <= n; ++i) {
        // Check if the current number (i) is a multiple of 3, 5, or 7 using the modulo operator (%).
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            // If i is a multiple of any of the three numbers, add it to the sum.
            sum += i;
        }
    }

    // Return the final sum containing the sum of all multiples of 3, 5, and 7 up to n.
    return sum;
};
