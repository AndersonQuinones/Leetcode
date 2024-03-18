function largestGoodInteger(num) {
    // Initialize a variable to store the maximum good integer found
    let maxGoodInteger = "";
    
    // Iterate through all possible substrings of length 3 in the input string 'num'
    for (let i = 0; i <= num.length - 3; i++) {
        // Extract the current substring of length 3
        const substring = num.substring(i, i + 3);
        
        // Check if the current substring is a good integer and larger than the maximum found so far
        if (isGoodInteger(substring) && substring > maxGoodInteger) {
            // Update the maximum good integer if the current substring is larger
            maxGoodInteger = substring;
        }
    }
    
    // Return the maximum good integer found
    return maxGoodInteger;
}

function isGoodInteger(substring) {
    // Check if all characters in the substring are the same
    return substring[0] === substring[1] && substring[1] === substring[2];
}
