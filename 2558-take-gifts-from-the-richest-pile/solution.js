function pickGifts(gifts: number[], k: number): number {
    // Continue the process for each second until k reaches 0
    while (k > 0) {
        --k;

        // Sort the gifts in ascending order
        gifts.sort((a, b) => a - b);

        // Choose the largest gift and leave behind the floor of its square root
        const largestGift = gifts.pop();
        const remaining = Math.floor(Math.sqrt(largestGift));
        gifts.push(remaining);
    }

    // Calculate the total remaining gifts
    return gifts.reduce((a, b) => a + b);
}
