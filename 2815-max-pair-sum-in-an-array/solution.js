function getDigits(num) {
    const digits = [];

    while (num > 0) {
        digits.push(num % 10); // Get the last digit of the number
        num = Math.floor(num / 10); // Remove the last digit from the number
    }

    return digits;
}

var maxSum = function(nums) {
    const maxDigitSums = new Map(); // Map to store the maximum digit sums
    let maxPairSum = -1; // Initialize the maximum pair sum to a negative value

    for (const num of nums) {
        const digits = getDigits(num); // Extract digits from the number
        const maxDigit = Math.max(...digits); // Find the maximum digit in the number

        if (maxDigitSums.has(maxDigit)) {
            // If the map already has the maximum digit as key
            maxPairSum = Math.max(maxPairSum, maxDigitSums.get(maxDigit) + num);
        }

        // Store the number as the value for the maximum digit key in the map
        maxDigitSums.set(maxDigit, Math.max(maxDigitSums.get(maxDigit) ?? 0, num));
    }

    return maxPairSum; // Return the maximum pair sum
};
