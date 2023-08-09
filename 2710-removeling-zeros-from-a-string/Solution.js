var removeTrailingZeros = function(num) {
    let count = 0; // Initialize a count to keep track of trailing zeros

    // Loop through the string from the end to the front
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === "0") {
            ++count; // Increment count if the current character is '0'
        } else {
            break; // Exit the loop if a non-zero character is encountered
        }
    }
    
    // Return a substring of the input string excluding the trailing zeros
    return num.substring(0, num.length - count);
};
