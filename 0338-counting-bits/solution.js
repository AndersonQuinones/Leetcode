function countBits(n) {
    // Initialize an array to store the count of set bits for each number from 0 to n
    const ans = new Array(n + 1).fill(0);
    
    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // Calculate the count of set bits for the current number i
        // We use the count of set bits for i/2 (right shift i by 1) and add 1 if i is odd (i & 1 is true)
        ans[i] = ans[i >> 1] + (i & 1);
    }
    
    // Return the array containing the count of set bits for each number from 0 to n
    return ans;
}
