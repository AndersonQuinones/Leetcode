function calculateTaxes(brackets, income) {
  let totalTax = 0;
  let previousUpper = 0;

  for (const [upper, percent] of brackets) {
    // Adjust the upper limit if it exceeds the income
    const adjustedUpper = Math.min(upper, income);

    // Calculate taxable income for the current bracket
    const taxableIncome = adjustedUpper - previousUpper;

    // Update previousUpper for the next iteration
    previousUpper = adjustedUpper;

    // Only calculate tax if there's taxable income
    if (taxableIncome > 0) {
      const tax = (taxableIncome * (percent / 100));
      totalTax += tax;
    }
  }

  return totalTax;
}
