var arithmeticTriplets = function(nums, diff) {
  // Create a hash map to store the occurrences of each number in the array
  const numOfOccurrences = new Map();

  // Initialize a variable to keep track of the count of arithmetic triplets
  let count = 0;

  // Count the occurrences of each number in the array using the hash map
  for (const num of nums){
    numOfOccurrences.set(num, (numOfOccurrences.get(num) || 0) + 1);
  }

  // Check for arithmetic triplets using the hash map
  for (const num of nums) {
    const prev = num - diff;
    const next = num + diff;

    // If both the previous number and the next number exist in the hash map,
    // it means we have found an arithmetic triplet
    if (numOfOccurrences.has(prev) && numOfOccurrences.has(next)) {
      // Increment the count by the product of the occurrences of the previous and next numbers
      count += numOfOccurrences.get(prev) * numOfOccurrences.get(next);
    }
  }

  // Return the final count of unique arithmetic triplets
  return count;
};
