function tribonacci(n: number): number {
    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        // Initialize array to store Tribonacci values
        let trib = [0, 1, 1];

        // Calculate Tribonacci values iteratively
        for (let i = 3; i <= n; i++) {
            trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
        }

        // Return the Tribonacci value for the given n
        return trib[n];
    }
}
