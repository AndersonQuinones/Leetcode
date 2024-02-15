function sortString(s) {
    const memo = new Array(26).fill(0);
    const str = [];
    
    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
        memo[s.charCodeAt(i) - 97]++;
    }
    
    let flag = true;

    // Reorder the string according to the algorithm
    while (str.length !== s.length) {
        for (let i = 0; i < memo.length; i++) {
            const pos = flag ? i : 25 - i;
            if (memo[pos] !== 0) {
                str.push(String.fromCharCode(pos + 97));
                memo[pos]--;
            }
        }
        flag = !flag;
    }
  
    return str.join('');
}
