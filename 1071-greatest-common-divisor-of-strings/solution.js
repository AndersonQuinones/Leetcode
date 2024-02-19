function gcd(a, b) {
    // Using Euclidean algorithm to find GCD
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a; // Return the GCD
}

function gcdOfStrings(str1, str2) {
    const len1 = str1.length; // Length of first string
    const len2 = str2.length; // Length of second string
    const divisorLength = gcd(len1, len2); // Calculate GCD of lengths
    const divisor = str1.slice(0, divisorLength); // Get the common divisor string

    // Check if concatenation of both strings results in the same string
    if (str1 + str2 === str2 + str1) {
        return divisor; // Return the common divisor string
    } else {
        return ""; // If not divisible, return an empty string
    }
}
