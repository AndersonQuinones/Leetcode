function maxValue(strs: string[]): number {
    let maxVal = 0; // Initialize the maximum value as 0

    // Iterate through the array of strings
    for (const str of strs) {
        let value = 0; // Initialize the value of the current string as 0

        // Check if the string consists of digits only
        if (/^\d+$/.test(str)) {
            value = parseInt(str, 10); // Convert the string to a numeric value
        } else {
            value = str.length; // Use the length of the string as its value
        }

        // Update the maximum value if the current value is greater
        if (value > maxVal) {
            maxVal = value;
        }
    }

    return maxVal; // Return the maximum value found in the array of strings
};
