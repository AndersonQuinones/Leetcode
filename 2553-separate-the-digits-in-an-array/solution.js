function getDigits(num) {
    const digits = [];
    
    // Continue extracting digits until the number becomes 0
    while (num > 0) {
        // Extract the least significant digit using modulo and add it to the front of the array
        digits.unshift(num % 10);
        
        // Remove the least significant digit by performing integer division
        num = Math.floor(num / 10);
    }
    
    return digits;
}

var separateDigits = function(nums) {
    const answer = [];
    
    // Iterate through each number in the array
    for (const num of nums) {
        // Call the getDigits function to extract digits from the current number
        const digits = getDigits(num);
        
        // Add the extracted digits to the answer array using the spread operator
        answer.push(...digits);
    }
    
    return answer;
};
