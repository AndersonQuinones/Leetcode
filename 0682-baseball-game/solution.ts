function calPoints(operations: string[]): number {
    const scores: number[] = [];

    for (const op of operations) {
        if (op === "C") {
            scores.pop(); // Remove the last score
        } else if (op === "D") {
            scores.push(scores[scores.length - 1] * 2); // Double the last score
        } else if (op === "+") {
            const lastTwoScoresSum = scores[scores.length - 1] + scores[scores.length - 2];
            scores.push(lastTwoScoresSum); // Add the sum of the last two scores
        } else {
            scores.push(parseInt(op, 10)); // Convert the string to an integer and add to scores
        }
    }

    return scores.reduce((sum, score) => sum + score, 0);
};
