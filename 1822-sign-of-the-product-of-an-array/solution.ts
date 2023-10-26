function arraySign(nums: number[]): number {
    let product = 1; // Initialize product as 1.

    for (let num of nums) {
        if (num === 0) {
            return 0; // If a number is zero, the product will be zero.
        } else if (num < 0) {
            product *= -1; // If a number is negative, flip the sign of the product.
        }
    }

    return product;
};
