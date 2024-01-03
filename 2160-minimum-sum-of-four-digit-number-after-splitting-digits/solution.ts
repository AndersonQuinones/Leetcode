function minimumSum(num: number): number {
    // convert number to string, split to digit and sort
    const sorted = String(num).split("").sort((a, b) => +a - +b);
    // return sum of numbers at inidicies 0 and 2 with numbers at indicies 2 and 3
    return Number(`${sorted[0]}${sorted[2]}`) + Number(`${sorted[1]}${sorted[3]}`)
};
