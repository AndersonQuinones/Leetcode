// Function to calculate the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: Factorial of 0 and 1 is 1
  }
  return n * factorial(n - 1); // Recursive call to calculate factorial
}

// Function to calculate the combination C(n, k)
function combination(n, k) {
  if (k > n) {
    return 0; // If k is greater than n, the combination is not possible, return 0
  }
  return factorial(n) / (factorial(k) * factorial(n - k)); // Calculate the combination
}

var numIdenticalPairs = function(nums) {
  const map = new Map(); // Create a Map to store the occurrences of each number
  let combinations = 0; // Initialize the variable to store the total combinations

  // Count the occurrences of each number and store them in the Map
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Calculate the number of combinations for each occurrence count
  for (const [key, value] of map) {
    combinations += combination(value, 2); // Calculate the combination C(value, 2) and add to total
  }

  return combinations; // Return the total number of identical pairs
};
