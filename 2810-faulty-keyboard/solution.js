var finalString = function(s) {
    // Create an empty array to store the characters of the final string
    let result = [];

    // Iterate through each character of the input string
    for (const char of s) {
        // If the character is 'i', reverse the characters accumulated in the result array
        if (char === "i") {
            result.reverse();
        } else {
            // If the character is not 'i', push it into the result array
            result.push(char);
        }
    }

    // Join the characters in the result array to form the final string
    return result.join('');
};
