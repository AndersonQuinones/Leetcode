function isValid(s: string): boolean {
 const map = {"(":")", "{":"}", "[":"]"}

 const stack: string[] = [];

  for (const char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      const lastOpened = stack.pop();
      if (char !== map[lastOpened]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
