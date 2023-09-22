function convertToBase7(num: number): string {
    // Check if the number is 0, in which case the base-7 representation is "0".
    if (num === 0) {
        return "0";
    }

    let result = "";
    // Ensure we work with the absolute value of the number.
    let n = Math.abs(num);

    while (n > 0) {
        // Calculate the remainder when dividing by 7.
        const remainder = n % 7;
        // Prepend the remainder to the result (building the base-7 representation from right to left).
        result = remainder.toString() + result;
        // Divide the number by 7 and round down to the nearest integer.
        n = Math.floor(n / 7);
    }

    // If the original number was negative, add a minus sign to the result.
    if (num < 0) {
        result = "-" + result;
    }

    return result;
};
