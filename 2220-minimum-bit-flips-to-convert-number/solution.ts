function minBitFlips(start: number, goal: number): number {
    let xor = start ^ goal;  // XOR of start and goal reveals differing bits
    let count = 0;

    // Count the set bits in the XOR result
    while (xor !== 0) {
        count += xor & 1;  // Check the least significant bit
        xor >>= 1;         // Right shift to check the next bit
    }

    return count;
};
