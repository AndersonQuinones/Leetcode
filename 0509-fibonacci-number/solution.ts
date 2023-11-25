function fib(n: number): number {
    // Base case: F(0) is 0
    if (n === 0) {
        return 0;
    } 
    // Base case: F(1) is 1
    else if (n === 1) {
        return 1;
    } 
    // For n > 1, use dynamic programming to calculate Fibonacci numbers
    else {
        // Initialize an array to store intermediate Fibonacci values
        let fib = [0, 1];
        
        // Iterate from 2 to n and calculate Fibonacci numbers
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        // Return the Fibonacci number at index n
        return fib[n];
    }
}
