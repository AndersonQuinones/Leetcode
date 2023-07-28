var subtractProductAndSum = function(n) {
  // Initialize variables to store the product and sum of digits
  let product = 1;
  let sum = 0;

  // Calculate the product and sum of the digits
  while (n > 0) {
    const digit = n % 10; // Extract the last digit of n
    product *= digit; // Calculate the product of the digits
    sum += digit; // Calculate the sum of the digits
    n = Math.floor(n / 10); // Remove the last digit from n
  }

  // Calculate the difference between the product and sum of the digits
  return product - sum;
};
