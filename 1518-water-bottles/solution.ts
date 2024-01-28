function numWaterBottles(numBottles: number, numExchange: number): number {
 // Initialize variables to keep track of total bottles and remaining empty bottles
  let totalBottles = numBottles;
  let emptyBottles = numBottles;

  // Continue exchanging bottles as long as there are enough empty bottles
  while (emptyBottles >= numExchange) {
    // Calculate the number of bottles obtained in the current exchange
    const exchangedBottles = Math.floor(emptyBottles / numExchange);

    // Update the total number of bottles and remaining empty bottles
    totalBottles += exchangedBottles;
    emptyBottles = exchangedBottles + (emptyBottles % numExchange);
  }

  // Return the maximum number of water bottles you can drink
  return totalBottles;   
};
