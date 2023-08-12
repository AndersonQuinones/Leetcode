var kidsWithCandies = function(candies, extraCandies) {
    // Find the maximum candy count among all kids
    let max = Math.max(...candies);

    // Initialize an array to store the results
    let ans = []

    // Iterate through each kid's candy count
    for (const num of candies) {
        // Check if the current kid's candy count with extraCandies is greater than or equal to max
        if (num + extraCandies >= max) {
            // If true, push true to the result array (kid can have the greatest number of candies)
            ans.push(true)
        } else {
            // If false, push false to the result array (kid won't have the greatest number of candies)
            ans.push(false)
        }
    }

    // Return the array containing the results
    return ans;
};
