function totalPoisonDuration(timeSeries, duration) {
    if (!timeSeries || duration === 0) {
        return 0;
    }

    let totalDuration = 0;
    const n = timeSeries.length;

    for (let i = 0; i < n - 1; i++) {
        const timeGap = timeSeries[i + 1] - timeSeries[i];
        totalDuration += Math.min(timeGap, duration);
    }

    // Add the duration of the last attack
    totalDuration += duration;

    return totalDuration;
}
