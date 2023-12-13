function generate(numRows: number): number[][] {
    const triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = [1];

        for (let j = 1; j < i; j++) {
            // Calculate the current value in the row by summing the two values above it in the previous row.
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        if (i > 0) {
            // Add the last element (1) to the row if it's not the first row.
            row.push(1);
        }

        // Add the current row to the triangle.
        triangle.push(row);
    }

    return triangle;
}
