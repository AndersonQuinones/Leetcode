function uniqueMorseRepresentations(words){
    // Morse code mapping for each letter of the alphabet
    const morseCodeMap = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    // ASCII code of 'a' to calculate the index for each letter in the Morse code mapping
    const aCode = 'a'.charCodeAt(0);
    
    // Set to store unique transformations
    const transformations = new Set();
    
    // Iterate through each word
    for (const word of words) {
        let transformation = '';
        // Iterate through each character of the word
        for (const char of word) {
            // Append the Morse code representation of the character to the transformation string
            transformation += morseCodeMap[char.charCodeAt(0) - aCode];
        }
        // Add the transformation to the set
        transformations.add(transformation);
    }
    
    // Return the size of the set which represents the number of different transformations
    return transformations.size;
};
