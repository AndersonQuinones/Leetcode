function countPrefixSuffixPairs(words) {
  // Use reduce to iterate through each word in the words array
  return words.reduce((count, word, i) => {
    // Use reduce again to compare the current word with all subsequent words
    return count + words.slice(i + 1).reduce((innerCount, otherWord) => {
      // Check if otherWord starts with and ends with the current word
      return innerCount + (otherWord.startsWith(word) && otherWord.endsWith(word));
    }, 0); // Initial value of innerCount is 0
  }, 0); // Initial value of count is 0
};
