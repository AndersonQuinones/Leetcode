function similarPairs(words) {
  // Count how many of each unique combination of characters we have in
  // the input. I'm preferring a `Map` here so we can iterate over its values
  // without needing `Object.values`.
  const freq = new Map();

  for (const word of words) {
    const unique = uniqueCharacters(word);

    // Defaults are your friends! Also look up the "nullish-coalescing
    // operator" if you haven't seen it before.
    freq.set(unique, (freq.get(unique) ?? 0) + 1);
  }

  let res = 0;
  // Now go over each group size and decide how many pairs ("handshakes")
  // are possible for a group that size using math. We also use a fun way of
  // destructuring since we only care about the values and not the keys.
  for (const [, groupSize] of freq) {
    // To understand the formula -- consider a group of 4 elements, let's
    // call them A, B, C, and D. Each of these 4 elements can be paired with
    // each of the other 3. For example, AB, AC, and AD are the pairs for A.
    // But if we simply multiply 4 by 3 then we're double-counting. For
    // example, BA, BC, and BD are the pairs for B, but AB and BA are really
    // the same pair. Each of the pairs gets double-counted in the same way.
    // So we divided by 2 to correct our answer.
    res += (groupSize * (groupSize - 1)) / 2;
  }

  return res;
}

function uniqueCharacters(s) {
  // We can create a set from the characters of the input with `new Set(s)`,
  // turn it into an array, sort it, and join it back into a string.
  return Array.from(new Set(s)).sort().join('');
}
