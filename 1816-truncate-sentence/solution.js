const truncateSentence = function(s, k) {
    let counter = 0; // Initialize a counter to keep track of the number of spaces encountered

    // Loop through the characters of the input string 's'
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === " ") { // If a space is encountered
            if (counter === k - 1) { // Check if we have encountered (k - 1) spaces
                return s.slice(0, i); // If so, return the substring from the beginning of 's' up to index 'i'
            }
            counter++; // Increment the counter for each space encountered
        }
    }

    // If the loop finishes without returning, it means we haven't encountered (k - 1) spaces
    // In that case, we return the original string 's' as it has fewer than k words.
    return s;
};
