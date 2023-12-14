function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if the current price is lower.
        minPrice = Math.min(minPrice, prices[i]);

        // Update the maximum profit if selling at the current price gives a higher profit.
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};
