function titleToNumber(columnTitle: string): number {
    // Initialize the result to 0
    let result = 0;

    // Iterate through each character in the columnTitle
    for (let i = 0; i < columnTitle.length; i++) {
        // Calculate the value of the current character based on its position in the alphabet
        const charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

        // Accumulate the result by multiplying the existing result by 26 and adding the new value
        result = result * 26 + charValue;
    }

    // Return the final result
    return result;
}
