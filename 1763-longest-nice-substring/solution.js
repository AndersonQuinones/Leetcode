function longestNiceSubstring(s) {
    // Base case: if the length of the string is less than 2, return an empty string
    if (s.length < 2) return "";

    // Create a set to store unique characters in the string
    const set = new Set();
    for (const c of s) set.add(c);

    // Iterate through each character in the string
    for (let i = 0; i <= s.length - 1; i++) {
        // Convert the current character to uppercase and lowercase
        const upperCaseChar = s[i].toUpperCase();
        const lowerCaseChar = s[i].toLowerCase();

        // If both the uppercase and lowercase versions of the character are present in the set, continue to the next character
        if (set.has(upperCaseChar) && set.has(lowerCaseChar)) {
            continue; 
        }
        
        // If the current character does not meet the nice condition, recursively call longestNiceSubstring on the substrings before and after the current character
        var str1 = longestNiceSubstring(s.substring(0, i));
        var str2 = longestNiceSubstring(s.substring(i + 1));
        
        // Return the longer of the two substrings
        return str1.length >= str2.length ? str1 : str2;
    }
    
    // If the entire string is nice, return the original string
    return s;
};
