function equalFrequency(word: string): boolean {
  // Create an object to store the frequency of each letter
  const frequencyCounts = {};

  // Count the frequency of each letter in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // Initialize the frequency count for the letter or increment it by 1
    frequencyCounts[letter] = frequencyCounts[letter] || 0;
    frequencyCounts[letter] = frequencyCounts[letter] + 1;
  }

  // Initialize a variable to check if there is a frequency of 1
  let frequenciesContainOne = false;

  // Create an array to store frequency values
  const frequencyValues = [];

  // Iterate through the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // Decrement the frequency count for the current letter
    frequencyCounts[letter] -= 1;

    // If the frequency count reaches 0, remove the entry
    if (frequencyCounts[letter] === 0) {
      delete frequencyCounts[letter];
    }

    // Check if all remaining frequencies are the same
    if (new Set(Object.values(frequencyCounts)).size === 1) {
      return true;
    }

    // Restore the frequency count for the current letter
    frequencyCounts[letter] ? (frequencyCounts[letter] += 1) : (frequencyCounts[letter] = 1);
  }

  // If no removal results in equal frequencies, return false
  return false;
}
