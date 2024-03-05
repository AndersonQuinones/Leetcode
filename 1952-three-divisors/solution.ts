function isThree(n: number): boolean {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // If the divisor is a perfect square of n, count only once
            if (n / i === i) {
                count++;
            } else { // Otherwise, count both divisors
                count += 2;
            }
        }
    }
    // Return true if the count is exactly three, otherwise false
    return count === 3;
}
