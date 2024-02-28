function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;  // Calculate the remainder of dividing a by b.
        a = temp;   // Swap a and b for the next iteration.
    }
    return a;  // Return the last non-zero remainder, which is the GCD.
}

function findGCD(nums) {
    let orgArr = nums.sort((a, b) => a - b);  // Sort the input array in ascending order.
    return gcd(orgArr[0], orgArr[orgArr.length - 1]);  // Compute the GCD of the smallest and largest numbers.
}
