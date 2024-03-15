function divideArray(nums) {
    // Create a Map to store the count of occurrences of each number
    let map = new Map();

    // Loop through the input array `nums`
    for (let num of nums) {
        // Update the count of the current number in the Map
        // If the number is not in the Map, initialize its count to 1
        // Otherwise, increment its count by 1
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Loop through each key-value pair in the Map
    for (let [key, value] of map) {
        // If the count of any number is odd, return false
        if (value % 2 !== 0) {
            return false;
        }
    }

    // If all counts are even, return true
    return true;
}
