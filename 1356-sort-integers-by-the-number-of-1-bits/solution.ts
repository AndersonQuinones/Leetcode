function sortByBits(arr: number[]): number[] {
    // Custom sorting function based on the number of set bits
    function countBits(num) {
        let count = 0;
        while (num > 0) {
            count += num & 1; // Check the rightmost bit
            num >>= 1; // Right shift to move to the next bit
        }
        return count;
    }

    arr.sort((a, b) => {
        const countA = countBits(a);
        const countB = countBits(b);

        // If the number of set bits is the same, sort by the integer value
        if (countA === countB) {
            return a - b;
        }

        // Otherwise, sort by the number of set bits
        return countA - countB;
    });

    return arr;
};
