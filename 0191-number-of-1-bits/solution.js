function hammingWeight(n) {
    // Use the bitwise AND operator to count the set bits (1s)
    let count = 0;
    while (n !== 0) {
        n &= (n - 1);
        count++;
    }
    return count;
};
