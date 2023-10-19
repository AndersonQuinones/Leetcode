function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreaterMap: Map<number, number> = new Map();
    const stack: number[] = [];

    // Iterate through nums2 to find the next greater element for each value
    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreaterMap.set(stack.pop()!, num);
        }
        stack.push(num);
    }

    // Remaining elements in stack don't have a next greater element
    for (const num of stack) {
        nextGreaterMap.set(num, -1);
    }

    // Build the result array based on nums1
    const result: number[] = [];
    for (const num of nums1) {
        result.push(nextGreaterMap.get(num)!);
    }

    return result;
};
