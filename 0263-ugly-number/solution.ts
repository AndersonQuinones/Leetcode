function isUgly(n: number): boolean {
    // Ugly numbers are defined as positive integers
    if (n <= 0) {
        return false;
    }

    // Array of prime factors that an ugly number can have
    const factors = [2, 3, 5];

    // Check divisibility by each factor and divide as long as divisible
    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }

    // If the final result is 1, then it is an ugly number
    return n === 1;
}
