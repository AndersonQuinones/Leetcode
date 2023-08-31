var createMap = function (string) {
    // Create a new Map to store character frequencies
    const map = new Map();

    // Iterate through each character in the string
    for (let char of string) {
        // Increment the count for the character in the map
        // If the character is not yet in the map, initialize its count to 1
        // If the character is already in the map, increment its count by 1
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Return the created map
    return map;
}

var findTheDifference = function(s, t) {
    // Create maps for character frequencies in both strings
    const tMap = createMap(t);
    const sMap = createMap(s);

    // Iterate through each key-value pair in the tMap
    for (let [key,value] of tMap) {
        // Check if the corresponding key exists in sMap and if the frequencies differ
        if (sMap.get(key) !== value) {
            // If the frequencies differ, it means this is the differing character
            return key;
        }
    }
}
