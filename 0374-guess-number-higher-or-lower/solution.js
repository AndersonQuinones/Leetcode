function guessNumber(n) {
    // Define the recursive function with start and end parameters.
    const recursive = (start, end) => {
        // Base case: If start becomes greater than end, return -1.
        if (start > end) {
            return -1;
        }

        // Calculate the midpoint of the range.
        const mid = Math.floor((start + end) / 2);

        // Call the guess function and store the result.
        const result = guess(mid);

        // Check the result and recursively call the function accordingly.
        if (result === 0) {
            return mid; // Return mid if guess is correct.
        } else if (result === 1) {
            return recursive(mid + 1, end); // Search in the right half.
        } else {
            return recursive(start, mid - 1); // Search in the left half.
        }
    };

    // Call the recursive function with initial parameters.
    return recursive(1, n);
};
