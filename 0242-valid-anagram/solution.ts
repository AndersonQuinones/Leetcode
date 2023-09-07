function map(str: string): Map<string, number> {
    const map = new Map<string, number>();

    // Iterate through each character in the string.
    for (const char of str) {
        // Increment the count of the character in the map.
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    return map;
}

function isAnagram(s: string, t: string): boolean {
    // Create character frequency maps for both strings.
    const sMap = map(s);
    const tMap = map(t);
    
    // If the sizes of the maps are different, the strings cannot be anagrams.
    if (sMap.size !== tMap.size) {
        return false;
    }

    // Iterate through the entries of the first map (sMap).
    for (const [key, value] of sMap) {
        // Check if the second map (tMap) has the same key and value.
        if (!tMap.has(key) || tMap.get(key) !== value) {
            return false; // If not, the strings are not anagrams.
        }
    }

    return true; // If all checks pass, the strings are anagrams.
}
