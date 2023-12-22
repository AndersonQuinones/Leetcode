function maxScore(s) {
    // Initialize variables to keep track of the maximum score,
    // the count of zeros on the left, and the count of ones on the right.
    let maxScore = 0;
    let zerosLeft = 0;
    let onesRight = s.split('1').length - 1;

    // Iterate through the string, excluding the last character.
    for (let i = 0; i < s.length - 1; i++) {
        // Update counts based on the current character.
        if (s[i] === '0') {
            zerosLeft++;
        } else {
            onesRight--;
        }

        // Update the maximum score by considering the current split point.
        maxScore = Math.max(maxScore, zerosLeft + onesRight);
    }

    // Return the maximum score.
    return maxScore;
}
