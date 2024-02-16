function arrangeCoins(n: number): number {
    let count = 0; // Initialize count of complete rows
    let remaining = n; // Initialize remaining coins
    let row = 1; // Initialize row number
    
    // Loop until remaining coins are enough for the current row
    while (remaining >= row) {
        remaining -= row; // Deduct coins needed for the current row
        count++; // Increment count of complete rows
        row++; // Move to the next row
    }
    
    return count; // Return the count of complete rows
}
