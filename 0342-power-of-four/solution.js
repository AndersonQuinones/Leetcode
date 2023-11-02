function isPowerOf4(n) {
    // Check if the number is positive and a power of 4
    return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}
