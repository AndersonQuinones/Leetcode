function checkRecord(s: string): boolean{
    let absenceCount = 0; // Initialize absence count to 0.
    let consecutiveLateCount = 0; // Initialize consecutive late count to 0.

    for (const char of s) {
        if (char === 'A') {
            // If 'A' is encountered, increment absence count and reset consecutive late count.
            absenceCount++;
            consecutiveLateCount = 0;
            
            // Check if the student is not eligible for an award due to excessive absences.
            if (absenceCount >= 2) {
                return false; // Not eligible for an award
            }
        } else if (char === 'L') {
            // If 'L' is encountered, increment consecutive late count.
            consecutiveLateCount++;
            
            // Check if the student is not eligible for an award due to consecutive late days.
            if (consecutiveLateCount >= 3) {
                return false; // Not eligible for an award
            }
        } else {
            // If 'P' is encountered, reset consecutive late count.
            consecutiveLateCount = 0;
        }
    }

    // If the loop completes without returning false, the student is eligible for an award.
    return true; // Eligible for an award
}
