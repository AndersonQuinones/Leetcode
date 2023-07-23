var balancedStringSplit = function(s) {
   // Convert the input string to an array of characters using the spread operator.
   const array = [...s];
   let balance = 0; // Variable to keep track of the balance of 'L' and 'R' characters.

   // Use the Array.reduce method to calculate the count of balanced substrings.
   return array.reduce((acc, curr) => {
       // Update the balance based on the current character.
       balance += curr === "L" ? 1 : -1;
       // If the balance is zero, it means a balanced substring is found, increment the accumulator (acc).
       return balance === 0 ? acc + 1 : acc;
   }, 0);
};
