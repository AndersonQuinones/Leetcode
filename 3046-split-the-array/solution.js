function isPossibleToSplit(nums) {
    const map = new Map();

    // Count the frequency of each element
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Check if any element has a count greater than 2
    for (let [key, value] of map.entries()) {
        if (value > 2) {
            return false;
        }
    }

    return true;
};
