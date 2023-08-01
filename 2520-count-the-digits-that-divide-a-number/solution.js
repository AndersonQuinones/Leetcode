var countDigits = function(num) {
    // Initialize a variable counter to keep track of the count of digits that divide num
    let counter = 0;

    // Convert the num to a string, split it into individual digits, and map each digit to a number
    // This creates an array called 'array' containing the individual digits of num
    const array = num.toString().split('').map(Number);

    // Start a for loop to iterate through the array of digits
    // Note: The loop condition should be i < array.length instead of i <= array.length
    for (let i = 0; i < array.length; i++) {
        // Check if the digit array[i] divides the original number num evenly
        if (num % array[i] === 0) {
            // If the condition is true, increment the counter
            counter++;
        }
    }

    // Return the counter, representing the count of digits that divide num
    return counter;
};
