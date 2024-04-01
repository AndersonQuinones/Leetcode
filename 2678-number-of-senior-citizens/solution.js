function countPassengersOver60(details) {
    let count = 0; // Initialize a count variable to keep track of passengers over 60

    // Iterate through each string in the details array
    for (let info of details) {
        let tensDigit = info.charAt(11); // Get the tens digit of the age from the string
        if (tensDigit >= '6') { // Check if the tens digit represents an age greater than or equal to 60
            count++; // Increment the count if the passenger is over 60
        }
    }

    return count; // Return the count of passengers over 60
}
