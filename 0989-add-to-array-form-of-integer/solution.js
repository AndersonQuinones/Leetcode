function addToArrayForm(num, k) {
    const result = [];
    let carry = 0;

    // Traverse the array-form of the integer and the number k from right to left
    for (let i = num.length - 1; i >= 0 || k > 0; i--) {
        const digitNum = i >= 0 ? num[i] : 0;
        const digitK = k % 10;

        // Add the digits and the carry
        const sum = digitNum + digitK + carry;

        // Calculate the new carry for the next iteration
        carry = Math.floor(sum / 10);

        // Update the result array with the current digit
        result.unshift(sum % 10);

        // Move to the next digit of k
        k = Math.floor(k / 10);
    }

    // If there's a carry left after the loop, add it to the result
    if (carry > 0) {
        result.unshift(carry);
    }

    return result;
};
