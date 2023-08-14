var canConstruct = function(ransomNote, magazine) {
    // Create maps to store character frequencies for ransomNote and magazine
    const rMap = new Map(); // Map for ransomNote characters
    const mMap = new Map(); // Map for magazine characters

    // Populate rMap with character frequencies from ransomNote
    for (const char of ransomNote) {
        rMap.set(char, (rMap.get(char) || 0) + 1);
    }

    // Populate mMap with character frequencies from magazine
    for (const char of magazine) {
        mMap.set(char, (mMap.get(char) || 0) + 1);
    }

    // Iterate through characters and their frequencies in ransomNote
    for (const [key, value] of rMap.entries()) {
        // Check if character exists in mMap and its frequency is sufficient
        if (!mMap.has(key) || mMap.get(key) < value) {
            // If character is missing or frequency is insufficient, ransom note cannot be constructed
            return false;
        }
    }

    // If all characters in ransomNote can be constructed from magazine, return true
    return true;
};
