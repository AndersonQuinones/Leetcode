
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    // Check for prime numbers using a 6k +/- 1 optimization.
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function diagonalPrime(nums: number[][]): number | null {
    let largestDiagonalPrime: number | null = null;

    // Determine the minimum dimension (rows or columns) of the 2D array.
    const minDimension = Math.min(nums.length, nums[0].length);

    // Iterate over the diagonals.
    for (let i = 0; i < minDimension; i++) {
        const num1 = nums[i][i]; // Main diagonal
        const num2 = nums[i][minDimension - i - 1]; // Other diagonal

        // Check if the number on the main diagonal is prime.
        if (isPrime(num1)) {
            if (largestDiagonalPrime === null || num1 > largestDiagonalPrime) {
                largestDiagonalPrime = num1;
            }
        }

        // Check if the number on the other diagonal is prime.
        if (isPrime(num2)) {
            if (largestDiagonalPrime === null || num2 > largestDiagonalPrime) {
                largestDiagonalPrime = num2;
            }
        }
    }

    return largestDiagonalPrime;
};
