function secondHighest(s: string): number {
  // Initialize variables to keep track of the largest and second largest digits
  let largest = -1;
  let secondLargest = -1;

  // Iterate through each character in the input string
  for (const char of s) {
    // Check if the character is a numerical digit
    if (char >= '0' && char <= '9') {
      // Convert the character to a numerical digit
      const digit = parseInt(char, 10);

      // Update the largest and second largest digits
      if (digit > largest) {
        secondLargest = largest;
        largest = digit;
      } else if (digit < largest && digit > secondLargest) {
        secondLargest = digit;
      }
    }
  }

  // Return the second largest digit found in the string
  return secondLargest;
}

// Test cases
console.log(secondHighest("dfa12321afd")); // Output: 2
console.log(secondHighest("abc1111")); // Output: -1
