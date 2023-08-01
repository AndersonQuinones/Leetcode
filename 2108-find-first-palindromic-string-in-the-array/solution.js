
var firstPalindrome =function(words){
  for (const word of words) {
    if (isPalindrome(word)) {
      return word; // Return the word if it is a palindrome
    }
  }

  return ""; // Return an empty string if no palindrome is found
}

var isPalindrome = function(word) {
  let left = 0; // Pointer for the leftmost character
  let right = word.length - 1; // Pointer for the rightmost character

  while (left < right) {
    if (word[left] !== word[right]) {
      return false; // If characters at left and right pointers don't match, it's not a palindrome
    }

    left++; // Move the left pointer towards the right
    right--; // Move the right pointer towards the left
  }

  return true; // If the loop completes without returning false, the word is a palindrome
}
