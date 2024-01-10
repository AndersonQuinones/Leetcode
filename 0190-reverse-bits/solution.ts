function reverseBits(n: number): number {
	    // Convert the integer to a binary string and pad with leading zeros
    let binaryString = n.toString(2).padStart(32, '0');
    
    // Reverse the binary string
    let reversedBinaryString = binaryString.split('').reverse().join('');
    
    // Convert the reversed binary string back to an integer
    let reversedInteger = parseInt(reversedBinaryString, 2);
    
    return reversedInteger;
};
