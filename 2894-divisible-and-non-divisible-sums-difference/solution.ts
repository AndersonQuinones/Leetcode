function differenceOfSums(n: number, m: number): number {
    // Calculate the sum of all numbers from 1 to n using the arithmetic sum formula.
    const totalSum = (n * (n + 1)) / 2;

    // Calculate the sum of all numbers from 1 to n that are divisible by m.
    // You can use the arithmetic sum formula for an arithmetic sequence with common difference m.
    const divisibleSum = ((Math.floor(n / m)) * (m + (Math.floor(n / m) * m))) / 2;

    // Calculate the sum of numbers that are not divisible by m.
    const nonDivisibleSum = totalSum - divisibleSum;

    // Calculate the difference.
    return nonDivisibleSum - divisibleSum;
};
