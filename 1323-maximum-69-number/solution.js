function maximum69Number(num) {
  // Convert the number to a string for easy manipulation
  const numStr = num.toString().split('');

  // Iterate through the digits
  for (let i = 0; i < numStr.length; i++) {
    // Change the leftmost '6' to '9' to maximize the number
    if (numStr[i] === '6') {
      numStr[i] = '9';
      break; // Stop after the first replacement
    }
  }

  // Convert the modified string back to a number
  return parseInt(numStr.join(''), 10);
}
