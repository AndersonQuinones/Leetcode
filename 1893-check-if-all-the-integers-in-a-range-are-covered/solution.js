function isCovered(ranges, left, right) {
    // Iterate through each integer in the range from left to right.
    for (let i = left; i <= right; i++) {
        let covered = false; // Initialize a flag to check if the current integer is covered.
        
        // Iterate through each interval in the ranges array.
        for (const [start, end] of ranges) {
            // Check if the current integer is within the current interval.
            if (i >= start && i <= end) {
                covered = true; // Set the flag to true if covered.
                break; // No need to check other intervals for this integer.
            }
        }
        
        // If the current integer is not covered by any interval, return false.
        if (!covered) {
            return false;
        }
    }
    
    // If all integers are covered by at least one interval, return true.
    return true;
};
