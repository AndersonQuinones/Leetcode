function frequencySort(nums) {
    const freq = {};
    
    // Count the frequency of each number
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Sort the numbers based on their frequencies
    return nums.sort((a, b) => freq[a] === freq[b] ? b - a : freq[a] - freq[b]);
}
