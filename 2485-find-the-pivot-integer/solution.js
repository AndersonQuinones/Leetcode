function pivotInteger(n) {
    // Calculate the total sum of all elements from 1 to n using the formula for the sum of an arithmetic series
    let totalSum = n * (n + 1) / 2;

    // Calculate the value of x using the inverse formula of the sum of an arithmetic series
    let x = Math.sqrt(totalSum);

    // If x is not an integer, it means there's no valid pivot integer, so return -1
    if (x % 1 !== 0) {
        return -1;
    } else {
        // If x is an integer, return its floor value as the pivot integer
        return Math.floor(x);
    }
}
