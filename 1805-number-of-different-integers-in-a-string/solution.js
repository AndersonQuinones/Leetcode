function numDifferentIntegers(word) {
    const integerSet = new Set();

    let startIndex = 0;
    let endIndex = 0;

    while (startIndex < word.length) {
        // Find the start index of the next integer
        while (startIndex < word.length && !isDigit(word[startIndex])) {
            startIndex++;
        }

        // Find the end index of the current integer
        endIndex = startIndex;
        while (endIndex < word.length && isDigit(word[endIndex])) {
            endIndex++;
        }

        // Extract and add the integer to the set
        const integerStr = word.slice(startIndex, endIndex);
        if (integerStr.length > 0) {
            // Convert the integer string to a normalized format (remove leading zeros)
            const normalizedIntegerStr = normalizeIntegerString(integerStr);
            integerSet.add(normalizedIntegerStr);  // Add to the set
        }

        startIndex = endIndex + 1;  // Move to the next character after the integer
    }

    return integerSet.size;
}

function isDigit(char) {
    return /^[0-9]$/.test(char);
}

function normalizeIntegerString(integerStr) {
    // Remove leading zeros
    return integerStr.replace(/^0+/, '');
}
