function splitWordsBySeparator(words, separator) {
    // Initialize an array to store the resulting strings.
    const result = [];

    // Iterate through each word in the input array.
    for (const word of words) {
        // Split the current word using the specified separator and filter out empty parts.
        const splitted = word.split(separator).filter(part => part !== "");
        
        // Push the non-empty parts into the result array.
        result.push(...splitted);
    }

    // Return the array of new strings formed after the splits.
    return result;
}
