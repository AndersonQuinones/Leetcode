function numberOfSteps(num: number): number {
    let counter = 0; // Initialize a counter to keep track of the number of steps.

    // Use a while loop to perform operations until 'num' becomes 0.
    while (num > 0) {
        if (num % 2 === 0) {
            // If 'num' is even (divisible by 2), divide it by 2.
            num = num / 2;
        } else {
            // If 'num' is odd, subtract 1 from it.
            num = num - 1;
        }
        counter++; // Increment the counter to count each step.
    }

    return counter; // Return the total number of steps taken.
};
