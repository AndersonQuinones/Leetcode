/**
 * Finds and returns the numbers that appear only once in the given array.
 * @param {number[]} nums - The input array of numbers.
 * @returns {number[]} - An array containing numbers that appear only once.
 */
function singleNumber(nums) {
    // Create a map to store the count of occurrences of each number
    const map = new Map();
    // Initialize an empty array to store the result
    let result = new Array();

    // Count the occurrences of each number in the input array
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // Iterate through the map entries to find numbers with count 1
    for (let [key, value] of map.entries()) {
        // If the count is 1, push the number to the result array
        if (value === 1) {
            result.push(key)
        }
    }

    // Return the array containing numbers that appear only once
    return result;
}
