var isLongPressedName = function(name, typed) {
  let nameCursor = 0;    // Pointer for the name string
  let typedCursor = 0;   // Pointer for the typed string

  while (nameCursor < name.length && typedCursor < typed.length) {
    const letter = name[nameCursor];  // The current character in the name

    // Count consecutive occurrences of the current character in the name
    let nameCount = 1;
    while (nameCursor + 1 < name.length && name[nameCursor + 1] === letter) {
      ++nameCursor;
      ++nameCount;
    }

    // Count consecutive occurrences of the current character in the typed
    let typedCount = 1;
    while (typedCursor + 1 < typed.length && typed[typedCursor + 1] === letter) {
      ++typedCursor;
      ++typedCount;
    }

    // If there are fewer occurrences of the current character in the typed, return false
    if (typedCount < nameCount) {
      return false;
    }

    // Move both cursors to the next character
    ++nameCursor;
    ++typedCursor;
  }

  // Check if we've matched all characters in both name and typed
  return nameCursor === name.length && typedCursor === typed.length;
};
