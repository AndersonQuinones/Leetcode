function countValidWords(sentence: string): number {
    // Regular expression to match valid words
    const isValidRegex = /^[a-z]+(?:-[a-z]+)?[.,!]?$/;

    // Split the sentence into individual words and filter out the valid words
    const validWords = sentence.split(/\s+/).filter((word) => isValidRegex.test(word) || /^[.,!]$/.test(word));

    // Return the total count of valid words
    return validWords.length;
}
