jfunction isValid(s: string): boolean {
  // Define a map that holds the opening and closing brackets
  const map = {"(":")", "{":"}", "[":"]"};

  // Initialize an empty stack to keep track of opening brackets
  const stack: string[] = [];

  // Iterate through each character in the input string
  for (const char of s) {
    if (map[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a closing bracket, pop the last opened bracket from the stack
      const lastOpened = stack.pop();

      // Check if the current closing bracket matches the expected one
      if (char !== map[lastOpened]) {
        // If they don't match, the string is not valid
        return false;
      }
    }
  }

  // After processing all characters, the stack should be empty for a valid string
  return stack.length === 0;
};



