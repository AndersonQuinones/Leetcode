function kLengthApart(nums: number[], k: number): boolean {
    let distance = k; // Initialize distance to k to allow for leading zeros

    for (const num of nums) {
        if (num === 1) {
            if (distance < k) {
                return false; // Found a pair of ones too close
            }
            distance = 0; // Reset distance after finding a one
        } else {
            distance++; // Increment distance for zeros
        }
    }

    return true; // All ones are at least k places apart
}
