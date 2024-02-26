function minimumCost(nums: number[]): number {
    // Initialize variables to store the three minimum elements
    let min1 = Infinity; // Initialize to positive infinity
    let min2 = Infinity; // Initialize to positive infinity
    let min3 = Infinity; // Initialize to positive infinity

    // Iterate through the array to find the three minimum elements
    for (const num of nums) {
        if (num < min1) {
            // Update minimum elements accordingly
            min3 = min2;
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min3 = min2;
            min2 = num;
        } else if (num < min3) {
            min3 = num;
        }
    }

    // Check if the first element of the original array is one of the three minimum elements
    if (min1 === nums[0] || min2 === nums[0] || min3 === nums[0]) {
        // If yes, return the sum of the three minimum elements
        return min1 + min2 + min3;
    } else {
        // If not, return the sum of the two smallest elements and the first element of the original array
        return min1 + min2 + nums[0];
    }
}
