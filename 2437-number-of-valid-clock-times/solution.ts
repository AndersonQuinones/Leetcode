function countTime(time: string): number {
  let hours = 0;
  let minutes = 0;

  // Check the first digit of hours
  if (time[0] === '?' && time[1] === '?') {
    // If both digits are '?', there are 24 possibilities (00 to 23)
    hours = 24;
  } else if (time[0] === '?') {
    // If the first digit is '?', consider the second digit
    hours = time[1] < '4' ? 3 : 2; // If second digit is less than 4, there are 3 possibilities (00 to 03), otherwise 2 possibilities (20 to 23)
  } else if (time[1] === '?') {
    // If the second digit is '?', consider the first digit
    hours = time[0] === '2' ? 4 : 10; // If first digit is 2, there are 4 possibilities (20 to 23), otherwise 10 possibilities (00 to 19)
  } else {
    // If both digits are fixed, there is only 1 possibility
    hours = 1;
  }

  // Check the first digit of minutes
  if (time[3] === '?' && time[4] === '?') {
    // If both digits are '?', there are 60 possibilities (00 to 59)
    minutes = 60;
  } else if (time[3] === '?') {
    // If the first digit is '?', consider the second digit
    minutes = 6; // There are 6 possibilities (00 to 05) for the first digit when the second digit is '?'
  } else if (time[4] === '?') {
    // If the second digit is '?', consider the first digit
    minutes = 10; // There are 10 possibilities (00 to 09) for the second digit when the first digit is '?'
  } else {
    // If both digits are fixed, there is only 1 possibility
    minutes = 1;
  }

  // Calculate the total possibilities by multiplying hours and minutes
  return hours * minutes;
}
