function numberGame(nums) {
    // Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  
  // Initialize an empty array to store the results
  const arr = [];

  // Play the game until nums becomes empty
  while (nums.length > 0) {
    // Alice removes the minimum element
    const aliceMove = nums.shift();
    // Bob removes the minimum element
    const bobMove = nums.shift();

    // Bob appends his removed element to arr
    arr.push(bobMove);
    // Alice appends her removed element to arr
    arr.push(aliceMove);
  }

  return arr;
};
