function readBinaryWatch(turnedOn) {
  const times = [];

  // Helper function to count the number of turned-on LEDs in a number
  const countOnes = (num) => {
    let count = 0;
    while (num > 0) {
      count += num & 1; // Check if the least significant bit is 1
      num >>= 1; // Shift the bits to the right
    }
    return count;
  };

  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      if (countOnes(hour) + countOnes(minute) === turnedOn) {
        // Format the time and add it to the result array
        times.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
      }
    }
  }

  return times;
}
