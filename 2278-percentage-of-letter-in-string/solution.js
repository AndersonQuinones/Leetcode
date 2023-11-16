function percentageLetter(s, letter){
    // Initialize a counter for the occurrences of the letter.
    let count = 0;

    // Loop through each character in the input string.
    for (let char of s) {
        // Check if the character is equal to the specified letter.
        if (char === letter) {
            // Increment the count if a match is found.
            count++;
        }
    }

    // Check if no occurrences were found.
    if (count === 0) {
        // If no occurrences, return 0 percentage.
        return 0;
    } else {
        // Calculate and return the percentage of occurrences.
        return Math.floor((count / s.length) * 100);
    }
}
