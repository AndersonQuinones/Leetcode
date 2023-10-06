function findWords(words: string[]): string[] {
  // Define the rows of the American keyboard as an array of strings.
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  // Helper function to check if a word can be typed using letters from a single row.
  function canTypeInOneRow(word: string): boolean {
    // Convert the word to lowercase for case-insensitive comparison.
    const lowercaseWord = word.toLowerCase();

    // Find the row that the first character of the word belongs to.
    const targetRow = rows.find(row => row.includes(lowercaseWord[0]));

    // Check if all characters of the word belong to the same row.
    return lowercaseWord.split('').every(char => targetRow?.includes(char));
  }

  // Filter the words that can be typed using letters from a single row.
  const result: string[] = words.filter(word => canTypeInOneRow(word));

  return result;
}
