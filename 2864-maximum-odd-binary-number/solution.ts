function maximumOddBinaryNumber(s) {
  // Convert the binary string 's' to an array of 0s and 1s, calculate the number of ones.
  const ones = [...s].map(Number).reduce((a, b) => a + b);

  // Calculate the number of zeroes in the string.
  const zeroes = s.length - ones;

  // Construct the maximum odd binary number by repeating '1's and '0's.
  return ['1'.repeat(ones - 1), '0'.repeat(zeroes), '1'].join('');
}
