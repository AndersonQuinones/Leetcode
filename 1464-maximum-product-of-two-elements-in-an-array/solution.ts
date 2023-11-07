function maxProduct(nums: number[]): number {
    let max1 = -Infinity; // Initialize the largest and second largest variables
    let max2 = -Infinity;

    for (let num of nums) {
        if (num > max1) {
            max2 = max1; // Update the second largest if a new largest is found
            max1 = num;
        } else if (num > max2) {
            max2 = num; // Update the second largest
        }
    }

    return (max1 - 1) * (max2 - 1);
};
