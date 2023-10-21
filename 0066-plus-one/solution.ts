function plusOne(digits: number[]): number[] {
  const n = digits.length;
  
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++; // Increment the current digit
      return digits; // No carryover, return the result
    } else {
      digits[i] = 0; // Set the current digit to 0 and continue
    }
  }
  
  // If we reach here, it means there was a carryover to the most significant digit
  digits.unshift(1); // Add 1 to the front of the array
  return digits;
}
