function findSpecialInteger(arr) {
    let map = new Map();
    let highestFreq = 0; // Variable to store the highest frequency
    let result = null; // Variable to store the element with the highest frequency

    // Count the frequency of each element in the array
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > highestFreq) {
            highestFreq = map.get(num); // Update the highest frequency
            result = num; // Update the result
        }
    }

    // Check if the highest frequency is greater than 25% of the array length
    if (highestFreq > Math.floor(arr.length / 4)) {
        return result;
    }
}
