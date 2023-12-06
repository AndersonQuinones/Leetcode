function numberOfMatches(n: number): number {
     let matchesPlayed = 0;

    while (n > 1) {
        if (n % 2 === 0) {
            // If the number of teams is even, each team gets paired with another team
            matchesPlayed += n / 2;
            n /= 2; // Halve the number of teams
        } else {
            // If the number of teams is odd, one team randomly advances, and the rest get paired
            matchesPlayed += (n - 1) / 2;
            n = (n - 1) / 2 + 1; // One team advances, and the rest get paired
        }
    }

    return matchesPlayed;
};
