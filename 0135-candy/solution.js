var candy = function(ratings) {
    let len = ratings.length;
    // Initialize an array 'candies' with the same length as 'ratings', and fill it with 1.
    // Each child must have at least one candy, so we start with all candies set to 1.
    let candies = Array(len).fill(1);

    // First pass: Traverse the 'ratings' array from left to right and update candies
    // for each child based on the ratings of its left neighbor.
    for (let i = 1; i < len; ++i) {
        if (ratings[i] > ratings[i - 1]) {
            // If the current child's rating is higher than the left neighbor's rating,
            // give the current child one more candy than the left neighbor.
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Second pass: Traverse the 'ratings' array from right to left and update candies
    // for each child based on the ratings of its right neighbor.
    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            // If the current child's rating is higher than the right neighbor's rating,
            // take the maximum of the current candy count and one more than the right neighbor.
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Finally, return the sum of all elements in the 'candies' array,
    // which represents the minimum number of candies needed to distribute.
    return candies.reduce((sum, val) => sum + val, 0);
};
