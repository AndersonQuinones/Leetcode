function minOperations(s: string): number {
     // Count operations for the case where the first character is '0'
    let opsStartWithZero = 0;
    for (let i = 0; i < s.length; i++) {
        // Check if the current character should be '0'
        if (i % 2 === 0 && s[i] !== '0') {
            opsStartWithZero++;
        } else if (i % 2 !== 0 && s[i] !== '1') {
            opsStartWithZero++;
        }
    }

    // Count operations for the case where the first character is '1'
    let opsStartWithOne = 0;
    for (let i = 0; i < s.length; i++) {
        // Check if the current character should be '1'
        if (i % 2 === 0 && s[i] !== '1') {
            opsStartWithOne++;
        } else if (i % 2 !== 0 && s[i] !== '0') {
            opsStartWithOne++;
        }
    }

    // Return the minimum number of operations needed
    return Math.min(opsStartWithZero, opsStartWithOne);
};
