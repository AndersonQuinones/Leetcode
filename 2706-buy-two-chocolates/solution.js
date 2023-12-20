function buyChoco(prices, money) {
    let firstMinCost = Infinity;
    let secondMinCost = Infinity;

    // Iterate through the prices to find the two minimum costs
    for (let p of prices) {
        if (p < firstMinCost) {
            secondMinCost = firstMinCost;
            firstMinCost = p;
        } else {
            secondMinCost = Math.min(secondMinCost, p);
        }
    }

    // Calculate the leftover money after buying two chocolates
    let leftover = money - (firstMinCost + secondMinCost);

    // Ensure the leftover is non-negative
    return Math.max(leftover, 0);
};
