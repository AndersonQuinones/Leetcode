var accountBalanceAfterPurchase = function(purchaseAmount) {
    // Calculate the amount to deduct from the account balance by rounding the purchaseAmount to the closest multiple of 10
    // For example, if purchaseAmount = 37, Math.round(37 / 10) * 10 = Math.round(3.7) * 10 = 4 * 10 = 40
    // So, 40 will be deducted from the account balance
    // If purchaseAmount = 33, Math.round(33 / 10) * 10 = Math.round(3.3) * 10 = 3 * 10 = 30
    // So, 30 will be deducted from the account balance
    return 100 - Math.round(purchaseAmount / 10) * 10;
};
