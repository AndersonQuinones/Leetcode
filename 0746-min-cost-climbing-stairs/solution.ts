function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    const dp: number[] = new Array(n);

    // The base cases for the first two steps
    dp[0] = cost[0];
    dp[1] = cost[1];

    // Calculate the minimum cost for each step starting from the third step
    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    // Return the minimum cost to reach the top, which can be either the last step or the second-to-last step
    return Math.min(dp[n - 1], dp[n - 2]);
}
