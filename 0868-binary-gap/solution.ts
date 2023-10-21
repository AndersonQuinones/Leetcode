function binaryGap(n: number): number {
  // Convert the input number to a binary string
  let binaryStr = n.toString(2);
  
  // Initialize variables to keep track of the maximum and current distances
  let maxDistance = 0;
  let currentDistance = 0;

  // Iterate through the binary string
  for (let i = 0; i < binaryStr.length; i++) {
    // If a '1' is encountered, calculate the distance and update maxDistance
    if (binaryStr[i] === '1') {
      // If the current distance is greater than the max distance, update maxDistance
      if (currentDistance > maxDistance) {
        maxDistance = currentDistance;
      }
      // Reset currentDistance for the next sequence of '0's
      currentDistance = 1;
    } else {
      // If a '0' is encountered, increment the current distance
      currentDistance++;
    }
  }

  // Return the maximum distance between adjacent '1's
  return maxDistance;
}
