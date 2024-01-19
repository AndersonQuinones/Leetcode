function canWinNim(n: number): boolean {
    // If the number of stones is not a multiple of 4, you can win.
    return n % 4 !== 0;
};
