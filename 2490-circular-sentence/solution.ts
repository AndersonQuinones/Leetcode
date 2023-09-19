function isCircularSentence(sentence: string): boolean {
  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; ++i) {
    // Check if the current character is a space and the adjacent characters are not equal
    if (sentence[i] === ' ' && sentence[i - 1] !== sentence[i + 1]) {
      return false; // If the space is not between circular words, return false
    }
  }

  // Check if the first character is equal to the last character
  return sentence[0] === sentence.at(-1);
};
