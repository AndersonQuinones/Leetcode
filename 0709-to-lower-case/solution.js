var toLowerCase = function(s) {
    let result = '';

    // Iterate through each character in the input string
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);

        // Check if the character is an uppercase letter (ASCII codes 65 to 90)
        if (charCode >= 65 && charCode <= 90) {
            // Convert uppercase character to lowercase by adding 32 to its ASCII code
            const lowercaseCharCode = charCode + 32;

            // Convert the new ASCII code back to a lowercase character and add it to the result
            result += String.fromCharCode(lowercaseCharCode);
        } else {
            // Keep non-uppercase characters unchanged and add them to the result
            result += s[i];
        }
    }

    return result;
};
