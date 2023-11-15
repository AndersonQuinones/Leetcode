function checkIfExist(arr) {
// Create a set to store the seen elements
  const seen = new Set();

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if arr[i] * 2 or arr[i] / 2 is already in the set
    if (
      seen.has(arr[i] * 2) ||
      (arr[i] % 2 === 0 && seen.has(arr[i] / 2))
    ) {
      // If the condition is met, return true
      return true;
    }

    // Add the current element to the set
    seen.add(arr[i]);
  }

  // If no such indices are found, return false
  return false;
};
