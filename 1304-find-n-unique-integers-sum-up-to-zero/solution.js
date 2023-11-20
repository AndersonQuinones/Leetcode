var sumZero = function(n) {
    let result = [];

    // If n is odd, include 0 in the array
    if (n % 2 !== 0) {
        result.push(0);
    }

    // Generate pairs of positive and negative integers
    for (let i = 1; i <= n / 2; i++) {
        result.push(i, -i);
    }

    return result;
};
