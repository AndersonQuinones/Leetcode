    let sIndex = 0; // Initialize an index for string 's'
    let tIndex = 0; // Initialize an index for string 't'

    // Iterate through both strings 's' and 't'
    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++; // Move to the next character in 's' if it matches 't'
        }
        tIndex++; // Always move to the next character in 't'
    }

    // If we've reached the end of 's', it means all characters in 's' were found in 't' in order.
    return sIndex === s.length;
};
