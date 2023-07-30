var differenceOfSum = function(nums) {
    let digitSum = 0; // Variable to store the sum of digits of all the numbers
    let sum = 0; // Variable to store the sum of all the numbers

    // Iterate through each number in the array
    for (const num of nums) {
        let currentNum = num; // Create a new variable to keep the original number intact

        // Calculate the sum of digits of the current number using the while loop
        while (currentNum > 0) {
            digitSum += currentNum % 10; // Add the last digit of the number to the digitSum
            currentNum = Math.floor(currentNum / 10); // Remove the last digit from the number
        }

        // Calculate the sum of all the numbers directly
        sum += num;
    }

    // Return the difference between the sum of all the numbers and the sum of their digits
    return sum - digitSum;
};
