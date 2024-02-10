function rearrangeArray(nums){
    // Separate elements into arrays for odd and even indices
    const oddIndices= [];
    const evenIndices= [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenIndices.push(nums[i]);
        } else {
            oddIndices.push(nums[i]);
        }
    }

    // Sort the arrays according to the rules
    oddIndices.sort((a, b) => b - a); // Sort odd indices in non-increasing order
    evenIndices.sort((a, b) => a - b); // Sort even indices in non-decreasing order

    // Combine the sorted arrays back into the original array
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = evenIndices.shift();
        } else {
            nums[i] = oddIndices.shift();
        }
    }

    return nums;
};
