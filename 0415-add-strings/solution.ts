function addStrings(num1: string, num2: string): string {
    // Initialize pointers for iterating through both strings
    let i = num1.length - 1; // Pointer for num1
    let j = num2.length - 1; // Pointer for num2
    let carry = 0; // Initialize carry to handle addition overflow
    let result = ''; // Initialize the result string

    // Iterate through both strings simultaneously
    while (i >= 0 || j >= 0 || carry > 0) {
        // Extract digits from num1 and num2, or use 0 if the pointers are out of range
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        
        // Calculate the sum of digits along with the carry from the previous iteration
        const sum = digit1 + digit2 + carry;

        // Append the least significant digit of the sum to the result string
        result = (sum % 10) + result;
        
        // Update the carry for the next iteration
        carry = Math.floor(sum / 10);

        // Move the pointers towards the start of the strings
        i--;
        j--;
    }

    // Return the final result string
    return result;
}
