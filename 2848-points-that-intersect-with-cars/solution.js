var numberOfPoints = function(nums) {
    // Sort the intervals based on their starting points
    nums.sort((a, b) => a[0] - b[0]);

    let count = 0;
    let currentEnd = -Infinity;

    for (const [start, end] of nums) {
        if (start > currentEnd) {
            // This interval is disjoint, increment the count
            count += end - start + 1;
            currentEnd = end;
        } else if (end > currentEnd) {
            // This interval overlaps with the previous one
            count += end - currentEnd;
            currentEnd = end;
        }
    }

    return count;
};
