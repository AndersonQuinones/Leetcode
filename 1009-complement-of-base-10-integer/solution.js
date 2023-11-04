function bitwiseComplement(n) {
    if (n === 0) {
        return 1; // Special case for 0
    }
    
    let mask = 1;
    while (mask < n) {
        mask = (mask << 1) + 1; // Create a mask with all bits set to 1
    }
    
    return n ^ mask; // Bitwise XOR to find the complement
};
