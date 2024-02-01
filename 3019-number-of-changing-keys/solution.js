function countKeyChanges(s) {
    // Initialize a counter to keep track of key changes
    let count = 0;

    // Iterate through the characters of the string starting from the second character
    for (let i = 1; i < s.length; i++) {
        // Calculate the ASCII difference between consecutive characters
        let x = s.charCodeAt(i) - s.charCodeAt(i - 1);

        // Check if the ASCII difference is not equal to 32, -32, or 0
        // These values correspond to no change, a space character, and the opposite case, respectively
        if (x !== 32 && x !== -32 && x !== 0) {
            // Increment the count if a key change is detected
            count++;
        }
    }

    // Return the final count representing the number of key changes in the string
    return count;
}
