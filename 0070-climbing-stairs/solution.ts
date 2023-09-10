function climbStairs(n: number): number {
  // Calculate the square root of 5
  const sqrt5 = Math.sqrt(5);
  // Calculate the golden ratio (phi) using the formula (1 + sqrt(5)) / 2
  const phi = (1 + sqrt5) / 2;
  // Calculate the nth Fibonacci number using the golden ratio formula
  // and round it to the nearest integer
  return Math.round(Math.pow(phi, n + 1) / sqrt5);
};
