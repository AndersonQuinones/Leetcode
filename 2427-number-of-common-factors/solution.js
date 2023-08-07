var commonFactors = function(a, b) {
  // Initialize a counter to keep track of common factors
  let counter = 0; 

  // Iterate through numbers from 1 up to the smaller of a and b
  for (let i = 1; i <= Math.min(a, b); i++) {
    // Check if both a and b are divisible by the current number i
    if (a % i === 0 && b % i === 0) {
        // If divisible, increment the counter
        ++counter;
    }
  }
  
  // Return the final count of common factors
  return counter;
};
