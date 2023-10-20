function maximumTime(time: string): string {
  // Split the input time string into an array of characters
  const timeArray = time.split('');

  // Handle the tens digit of hours
  if (timeArray[0] === '?') {
    // If the tens digit is a question mark and the ones digit is also a question mark or less than or equal to 3, set it to '2'
    if (timeArray[1] === '?' || Number(timeArray[1]) <= 3) {
      timeArray[0] = '2';
    } else {
      // Otherwise, set it to '1'
      timeArray[0] = '1';
    }
  }

  // Handle the ones digit of hours
  if (timeArray[1] === '?') {
    // If the tens digit of hours is '2', set the ones digit to '3'
    if (timeArray[0] === '2') {
      timeArray[1] = '3';
    } else {
      // Otherwise, set it to '9'
      timeArray[1] = '9';
    }
  }

  // Handle the tens digit of minutes
  if (timeArray[3] === '?') {
    // If the tens digit is a question mark, set it to '5'
    timeArray[3] = '5';
  }

  // Handle the ones digit of minutes
  if (timeArray[4] === '?') {
    // If the ones digit is a question mark, set it to '9'
    timeArray[4] = '9';
  }

  // Join the characters back together to form the maximum valid time
  return timeArray.join('');
}
