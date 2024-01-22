function findComplement(num: number): number {
    // Find the number of bits needed to represent the integer
    let bitCount = 0;
    let n = num;

    while (n > 0) {
        bitCount++;
        n >>= 1; // Right shift to check each bit
    }

    // Create a mask with all bits set to 1 for the same length as the binary representation
    const mask = (1 << bitCount) - 1;

    // XOR the number with the mask to get the complement
    return num ^ mask;
}
