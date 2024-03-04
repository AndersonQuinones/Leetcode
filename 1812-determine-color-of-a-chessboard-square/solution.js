function squareIsWhite(coordinates) {
    // Extract the column (letter) and row (number) from the coordinates
    const column = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // Convert letter to column number (1-indexed)
    const row = parseInt(coordinates[1]); // Convert number to row number
    
    // Check if the sum of the row and column numbers is even (white square) or odd (black square)
    return (row + column) % 2 === 0 ? false : true;
}
