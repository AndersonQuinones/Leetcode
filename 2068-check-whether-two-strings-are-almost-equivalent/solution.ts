function checkAlmostEquivalent(word1: string, word2: string): boolean {
  // Create a frequency map to track the count of each character in word1 and word2.
  const freq = new Map<string, number>();

  // Populate the frequency map for word1.
  for (const c of word1) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
  }

  // Update the frequency map for word2 by subtracting the counts.
  for (const c of word2) {
    freq.set(c, (freq.get(c) ?? 0) - 1);
  }

  // Check if the absolute difference in character counts exceeds 3 for any character.
  for (const delta of freq.values()) {
    if (Math.abs(delta) > 3) {
      return false; // If the condition is met, return false (not almost equivalent).
    }
  }

  return true; // If no condition is met, return true (almost equivalent).
}
