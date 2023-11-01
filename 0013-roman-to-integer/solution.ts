function romanToInt(s: string): number {
    // Create a map to associate each Roman numeral with its value.
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    let result = 0; // Initialize the result to store the integer value.
    
    // Iterate through the Roman numeral string.
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const nextChar = s[i + 1]; // Get the next character in the string.
        
        // Check if subtraction is used (e.g., IV or IX).
        if (romanNumerals[currentChar] < romanNumerals[nextChar]) {
            result += romanNumerals[nextChar] - romanNumerals[currentChar];
            i++; // Skip the next character since it has been processed as part of subtraction.
        } else {
            // If no subtraction is used, simply add the value of the current character.
            result += romanNumerals[currentChar];
        }
    }
    
    return result; // Return the final integer value.
};
