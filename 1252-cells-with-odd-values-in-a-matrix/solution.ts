function oddCells(m: number, n: number, indices: number[][]): number {
  const rowIncrement = new Array(m).fill(0);
    const colIncrement = new Array(n).fill(0);

    // Process indices to calculate increments for rows and columns
    for (const [ri, ci] of indices) {
        rowIncrement[ri]++;
        colIncrement[ci]++;
    }

    let oddCount = 0;

    // Iterate through the matrix and count odd-valued cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cellValue = rowIncrement[i] + colIncrement[j];

            if (cellValue % 2 !== 0) {
                oddCount++;
            }
        }
    }

    return oddCount;  
};
