function areCoprime(a, b) {
  // Function to calculate the greatest common divisor using Euclidean algorithm
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  // Check if the greatest common divisor is 1 (i.e., coprime)
  return gcd(a, b) === 1;
}

var countBeautifulPairs = function(nums) {
  let count = 0;

  // Loop through all pairs of numbers in the array
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the first digit of the first number and the last digit of the second number are coprime
      if (areCoprime(+String(nums[i])[0], nums[j] % 10)) {
        // Increment the count if the pair is beautiful
        count++;
      }
    }
  }

  // Return the total count of beautiful pairs
  return count;
};
