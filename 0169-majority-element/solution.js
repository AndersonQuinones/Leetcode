var count = function(nums) {
    let map = new Map();

    // Iterate through each element in the array
    for (const num of nums) {
        // Increment the count of the current element in the map
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    return map; // Return the map containing element counts
}

var majorityElement = function(nums) {
    let length = Math.floor(nums.length / 2);

    // Iterate through the elements and their counts using the count function
    for (const [key, value] of count(nums)) {
        // Check if the count of the current element is greater than half the array length
        if (value > length) {
            return key; // Return the majority element
        }
    }

    // Return null if no majority element is found
    return null;
};
