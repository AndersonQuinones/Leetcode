function isPerfectNumber(num) {
    // Check if the number is less than or equal to 1
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not perfect numbers
    }

    let sum = 1; // Include 1 as a proper divisor

    // Iterate from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Check if i is a divisor of num
        if (num % i === 0) {
            sum += i; // Add i to the sum

            // If i is not equal to the corresponding divisor, add the divisor to the sum
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    // Check if the sum of proper divisors is equal to the number
    return sum === num;
}
