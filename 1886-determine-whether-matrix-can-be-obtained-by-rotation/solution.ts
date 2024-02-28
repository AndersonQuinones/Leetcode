function rotateMatrix(matrix: number[][]): number[][] {
    const n = matrix.length;
    // Create a new matrix to store the rotated values
    const rotated: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Calculate new indices after rotation and assign the value
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }
    
    return rotated;
}

function arraysEqual(arr1: number[][], arr2: number[][]): boolean {
    const n = arr1.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function findRotation(mat: number[][], target: number[][]): boolean {
    for (let i = 0; i < 4; i++) {
        if (arraysEqual(mat, target)) {
            return true;
        }
        // Rotate the matrix by 90 degrees clockwise
        mat = rotateMatrix(mat);
    }
    return false;
}
