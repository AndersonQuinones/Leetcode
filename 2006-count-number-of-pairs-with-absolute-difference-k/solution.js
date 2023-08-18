var countKDifference = function(nums, k) {
    let count = 0;
    const numCount = new Map(); // Create a Map to store the count of each number

    // Iterate through each number in the array
    for (let num of nums) {
        // Check if (num - k) exists in the Map and add its count to the total count
        if (numCount.has(num - k)) {
            count += numCount.get(num - k);
        }

        // Check if (num + k) exists in the Map and add its count to the total count
        if (numCount.has(num + k)) {
            count += numCount.get(num + k);
        }

        // Increment the count of the current number in the Map
        numCount.set(num, (numCount.get(num) ?? 0) + 1);
    }

    return count; // Return the total count of pairs with absolute difference k
};
