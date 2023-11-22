function fizzBuzz(n: number): string[] {
    let resultArray = new Array();

    // Iterate from 1 to n
    for (let num = 1; num <= n; num++) {
        // Check if the current number is divisible by both 3 and 5
        if (num % 3 === 0 && num % 5 === 0) {
            resultArray.push("FizzBuzz");
        } else if (num % 3 === 0) { // Check if the current number is divisible by 3
            resultArray.push("Fizz");
        } else if (num % 5 === 0) { // Check if the current number is divisible by 5
            resultArray.push("Buzz");
        } else {
            resultArray.push(num.toString()); // Convert the number to a string and add to the array
        }
    }

    return resultArray;
}
