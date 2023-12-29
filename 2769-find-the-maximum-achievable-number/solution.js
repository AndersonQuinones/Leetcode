function theMaximumAchievableX(num, t) {
    // The maximum achievable number is obtained by increasing or
    // decreasing 'num' by 1, at most 't' times on both sides (t + t).
    return num + t + t;
}
