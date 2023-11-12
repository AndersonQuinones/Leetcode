function isFascinating(n: number): boolean {
    // Concatenate the number with 2 times and 3 times itself
    const concatenatedNumber = [n, 2 * n, 3 * n].join('');

    // Check conditions for a fascinating number
    return concatenatedNumber.length === 9 &&        // Length should be 9
           new Set(concatenatedNumber).size === 9 &&  // Should have 9 unique digits
           !concatenatedNumber.includes('0');        // Should not contain '0'
}
