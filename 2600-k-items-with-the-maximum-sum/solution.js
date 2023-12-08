function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
  // If the number of items to pick is less than or equal to the number of ones, return the count of ones.
  if (k <= numOnes) {
        return k;
    }

    let sum = 0;

    // Pick all ones
    if (numOnes) {
        sum += numOnes;
        k -= numOnes;
    }

    // If there are zeros, pick them if needed
    if (k > 0 && numZeros) {
        k -= numZeros;
    }

    // If there are still items to pick and there are negative ones, pick them.
    if (k > 0 && numNegOnes) {
        sum += k * -1;
    }

    return sum;
}
