function countEven(num: number): number {
  let count = 0;

  // Iterate through positive integers from 1 to 'num'.
  for (let i = 1; i <= num; i++) {
    if (isEvenDigitSum(i)) {
      count++;
    }
  }

  return count;
}

function isEvenDigitSum(n: number): boolean {
  let digitSum = 0;

  // Calculate the sum of digits in the number.
  while (n > 0) {
    digitSum += n % 10;
    n = Math.floor(n / 10);
  }

  // Check if the digit sum is even.
  return digitSum % 2 === 0;
};
