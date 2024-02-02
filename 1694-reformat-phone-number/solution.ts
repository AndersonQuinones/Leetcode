function reformatNumber(number: string): string {
    // Remove spaces and dashes
    const digits = number.replace(/[-\s]/g, '');

    const result = [];
    let i = 0;

    // Group digits into blocks of length 3 until 4 or fewer digits are left
    while (i < digits.length) {
        if (digits.length - i > 4) {
            result.push(digits.slice(i, i + 3));
            i += 3;
        } else {
            // Special case for the last 4 digits
            if (digits.length - i === 4) {
                result.push(digits.slice(i, i + 2));
                i += 2;
            } else {
                result.push(digits.slice(i));
                i = digits.length;
            }
        }
    }

    // Join blocks with dashes
    return result.join('-');
};
