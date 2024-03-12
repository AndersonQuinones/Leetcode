function findErrorNums(nums: number[]): number[] {
    // declare array and fill with zeroes (since we look for numbers form 1 we create array up to length + 1)
    const arr = new Array(nums.length + 1).fill(0);
    // iterate over nums array
    for(let i = 0; i < nums.length; i++) {
        // map each num from nums array to index of arr, and element to frequency value of that number
        arr[nums[i]] += 1;
    }
    // declare duplicate variable
    let dup = -1;
    // declare missing variable
    let miss = 1;
    // iterate over arr
    for(let i = 1; i < arr.length; i++) {
        // check for missing number, it's index element will be 0
        if(arr[i] === 0) miss = i;
        // check for duplicate number, it's index element will be 2
        else if(arr[i] === 2) dup = i;
    }
    // return result
    return [dup, miss]
};
