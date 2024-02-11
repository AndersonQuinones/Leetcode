function checkDistance(s, distance) {
    const indices = new Array(26).fill(null).map(() => []);
    
    // Store the indices of each letter in the string
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97; // Convert character to index (0-indexed)
        indices[index].push(i);
    }
    
    // Check if the distances between occurrences match the specified values
    for (let i = 0; i < 26; i++) {
        const charDistance = distance[i];
        if (indices[i].length === 2) {
            const firstIndex = indices[i][0];
            const secondIndex = indices[i][1];
            if (secondIndex - firstIndex - 1 !== charDistance) {
                return false;
            }
        } else if (indices[i].length > 0) {
            // If a letter appears more than twice, return false
            return false;
        }
    }
    
    return true;
}
