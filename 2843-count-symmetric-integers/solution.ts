function isSymmetric(num: number): boolean {
    // Convert the number to a string to work with its digits.
    const numStr: string = num.toString();
    const length: number = numStr.length;

    // Check if the length is odd; if it is, the number cannot be symmetric.
    if (length % 2 !== 0) {
        return false;
    }

    // Calculate the half-length of the number.
    const halfLength: number = length / 2;
    let leftSum: number = 0;
    let rightSum: number = 0;

    // Iterate through the left and right halves of the number, summing their digits.
    for (let i: number = 0; i < halfLength; i++) {
        leftSum += Number(numStr[i]); // Sum the digits from the left half.
        rightSum += Number(numStr[length - i - 1]); // Sum the digits from the right half.
    }

    // Check if the sums of the left and right halves are equal, indicating symmetry.
    return leftSum === rightSum;
};

function countSymmetricIntegers(low: number, high: number): number {
    let count: number = 0;

    // Iterate through the numbers in the specified range.
    for (let num: number = low; num <= high; num++) {
        // If the current number is symmetric, increment the count.
        if (isSymmetric(num)) {
            count++;
        }
    }

    // Return the total count of symmetric integers in the range.
    return count;
};
