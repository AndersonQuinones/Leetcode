function threeConsecutiveOdds(arr: number[]): boolean {
    let consecutiveOddsCount = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            consecutiveOddsCount++;

            if (consecutiveOddsCount === 3) {
                return true; // Found three consecutive odds
            }
        } else {
            consecutiveOddsCount = 0; // Reset the count if an even number is encountered
        }
    }

    return false; // No three consecutive odds found
}
