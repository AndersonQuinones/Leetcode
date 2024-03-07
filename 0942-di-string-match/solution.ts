function diStringMatch(s: string): number[] {
    // Get the length of the string
    const n = s.length;
    
    // Initialize variables to track the range of possible values
    let low = 0, high = n;
    
    // Initialize an array to store the resulting permutation
    const result: number[] = [];

    // Iterate through each character of the string
    for (let i = 0; i <= n; i++) {
        // If the current character is 'I', append the current value of 'low' to the result and increment 'low'
        if (s[i] === 'I') {
            result.push(low++);
        } 
        // If the current character is 'D', append the current value of 'high' to the result and decrement 'high'
        else {
            result.push(high--);
        }
    }
    
    // Return the resulting permutation array
    return result;
};
