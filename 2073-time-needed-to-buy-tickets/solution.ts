function timeRequiredToBuy(tickets: number[], k: number): number {
    let answer: number = 0;
    let n = tickets[k]; // Number of tickets the person at position k wants to buy

    // Calculate the time taken for the people before the person at position k to buy their tickets
    for (let person of tickets.slice(0, k + 1)) {
        // If the number of tickets the person wants to buy is greater than or equal to n,
        // add n to the answer; otherwise, add the number of tickets the person wants to buy
        person >= n ? (answer += n) : (answer += person);
    }

    // Calculate the time taken for the people after the person at position k to buy their tickets
    for (let person of tickets.slice(k + 1)) {
        // If the number of tickets the person wants to buy is greater than or equal to n,
        // add n - 1 to the answer; otherwise, add the number of tickets the person wants to buy
        person >= n ? (answer += n - 1) : (answer += person);
    }

    return answer;
}
