var decompressRLElist = function(nums) {
    // Initialize an empty array called 'result' to store the decompressed list
    const result = [];

    // Start a for loop to iterate through the 'nums' array by increments of 2
    // Each pair of elements [freq, val] = [nums[i], nums[i + 1]] represents the frequency 'freq'
    // of value 'val' in the compressed list
    for (let i = 0; i < nums.length; i += 2) {
        // Create an array called 'group' with 'nums[i]' number of elements, each filled with 'nums[i + 1]'
        const group = Array(nums[i]).fill(nums[i + 1]);

        // Push the 'group' array to the 'result' array
        // The 'group' array represents the sublist of repeated 'val' elements as per the frequency 'freq'
        result.push(group);

        // Alternatively, you can use the below commented code to achieve the same result
        // for (let j = 0; j < nums[i]; j++) {
        //     result.push(nums[i + 1]);
        // }
    }

    // Flatten the 'result' array to convert the array of sublists into a single decompressed list
    return result.flat();
};
