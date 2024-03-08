function dayOfYear(date: string): number {
    // Split the date string into an array containing year, month, and day
    const [year, month, day] = date.split('-').map(Number);

    // Define an array to store the number of days in each month
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if the year is a leap year and adjust February's days accordingly
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[2] = 29; // February has 29 days in a leap year
    }

    let dayNumber = 0; // Initialize the day number to zero

    // Iterate through the months before the given month and sum up the days
    for (let i = 1; i < month; i++) {
        dayNumber += daysInMonth[i];
    }

    // Add the day of the month to get the total day number of the year
    dayNumber += day;

    // Return the calculated day number
    return dayNumber;
}
