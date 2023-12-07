function totalMoney(n: number): number {
  // Initialize variables to keep track of the amount on the last Monday and the last day
  let lastMonday = 0;
  let lastDay = 0;

  // Initialize the result variable to store the total amount
  let res = 0;

  // Iterate through each day
  for (let i = 0; i < n; ++i) {
    // Calculate the amount to be added for the current day
    let amount = lastDay + 1;

    // Check if the current day is a Monday (i % 7 === 0)
    if (i % 7 === 0) {
      // If it's a Monday, reset the amount to $1 more than the previous Monday
      amount = lastMonday + 1;

      // Update the lastMonday variable with the new amount
      lastMonday = amount;
    }

    // Update the lastDay variable with the amount for the current day
    lastDay = amount;

    // Add the calculated amount to the total result
    res += amount;
  }

  // Return the final result
  return res;
}
