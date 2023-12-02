function removeElement(nums, val) {
  let k = 0; // Represents the index for the new array without occurrences of val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // Move the non-val element to the front of the array
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
