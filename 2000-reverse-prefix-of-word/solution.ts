function reversePrefix(word: string, ch: string): string {
    // Find the index of the first occurrence of character 'ch' in 'word'
    const index = word.indexOf(ch);

    // Check if 'ch' exists in 'word'
    if (index !== -1) {
        // Extract the segment from the beginning of 'word' up to the index of the first occurrence of 'ch' (inclusive)
        const reversedSegment = word.substring(0, index + 1).split('').reverse().join('');
        
        // Concatenate the reversed segment with the rest of 'word' after 'ch'
        return reversedSegment + word.substring(index + 1);
    }

    // If 'ch' is not found, return the original 'word'
    return word;
}
