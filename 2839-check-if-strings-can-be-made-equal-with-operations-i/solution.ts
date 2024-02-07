function canBeEqual(s1: string, s2: string): boolean {
    // Iterate over the first two characters of the strings
    for (let index = 0; index < 2; index++) {
        // Check if characters in a cross position are equal
        let isCrossEqual = (
            s1[index] === s2[2 + index] &&  // Check characters from s1 at current index and from s2 at index + 2
            s2[index] === s1[2 + index]      // Check characters from s2 at current index and from s1 at index + 2
        );
        // Check if characters in a linear position are equal
        let isLinearlyEqual = (
            s1[index] === s2[index] &&       // Check characters from s1 at current index and from s2 at current index
            s1[2 + index] === s2[2 + index]  // Check characters from s1 at index + 2 and from s2 at index + 2
        );
        // If neither cross nor linear positions are equal, return false
        if (!isCrossEqual && !isLinearlyEqual) {
            return false;
        }
    }
    // If all checks pass, return true
    return true;
};
