function distinctAverages(nums: number[]): number {
    // Set to store distinct averages
    let distAvgs: Set<number> = new Set<number>();

    // Sort the input array in ascending order
    nums.sort((a, b) => a - b);

    // Continue until the input array is empty
    while (nums.length > 0) {
        // Remove the smallest and largest elements from the array, and calculate their average
        const avg = (nums.shift() + nums.pop()) / 2;

        // Add the calculated average to the set of distinct averages
        distAvgs.add(avg);
    }

    // Return the number of distinct averages
    return distAvgs.size;
}
