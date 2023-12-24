function getRow(rowIndex: number): number[] {
    // Create an array to store the elements of the row
    const result: number[] = new Array(rowIndex + 1).fill(0);
    
    // The first element is always 1
    result[0] = 1;

    // Iterate through each row
    for (let i = 1; i <= rowIndex; i++) {
        // Iterate from the end to the second element
        for (let j = i; j >= 1; j--) {
            // Update the current element by adding the value above and to the left
            result[j] += result[j - 1];
        }
    }

    // Return the generated row
    return result;
};
