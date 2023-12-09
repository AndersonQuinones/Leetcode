function addBinary (a, b) {
    let result = "";
    let carry = 0;

    // Ensure that both strings have the same length by adding leading zeros
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    // Iterate through the strings from right to left
    for (let i = maxLength - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);

        // Calculate the sum and carry
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    // If there's a remaining carry, add it to the result
    if (carry > 0) {
        result = carry + result;
    }

    return result;
};
