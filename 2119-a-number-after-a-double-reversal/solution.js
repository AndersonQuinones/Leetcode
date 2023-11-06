function isSameAfterReversals(num) {
    // Define a function to reverse an integer.
    function reverseInteger(n) {
        let reversed = 0;
        while (n > 0) {
            reversed = reversed * 10 + (n % 10);
            n = Math.floor(n / 10);
        }
        return reversed;
    }

    // Reverse the input integer to get reversed1.
    let reversed1 = reverseInteger(num);

    // Reverse reversed1 to get reversed2.
    let reversed2 = reverseInteger(reversed1);

    // Compare reversed2 with the original num.
    return reversed2 === num;
};
