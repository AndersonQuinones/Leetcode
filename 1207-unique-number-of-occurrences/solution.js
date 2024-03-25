function uniqueOccurrences(arr) {
    let map = new Map();
    let store = new Set(); // Use a Set for better performance

    // Count the occurrences of each element
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Collect unique occurrence counts in a Set
    for (let [key, value] of map.entries()) {
        store.add(value);
    }

    // Check if the Set contains unique values
    return store.size === map.size;
};
