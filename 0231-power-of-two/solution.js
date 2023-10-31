function isPowerOfTwo(n) {
    // Check if n is greater than 0 (negative numbers and 0 are not powers of 2)
    // Use bitwise AND to check if n has exactly one '1' bit (i.e., n is a power of 2)
    return n > 0 && (n & (n - 1)) === 0;
}
