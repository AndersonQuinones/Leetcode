function convertToTitle(columnNumber: number): string {
    let result = ''; // Initialize an empty string to store the column title.

    // Loop until the columnNumber becomes zero.
    while (columnNumber > 0) {
        // Calculate the remainder when dividing the (columnNumber - 1) by 26.
        const remainder = (columnNumber - 1) % 26;

        // Convert the remainder to the corresponding ASCII character and prepend it to the result.
        result = String.fromCharCode(65 + remainder) + result;

        // Update the columnNumber by subtracting the remainder and dividing by 26.
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    // Return the final Excel sheet column title.
    return result;
}
