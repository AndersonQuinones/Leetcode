function haveConflict(event1: string[], event2: string[]): boolean {
    // Destructure the input arrays to get start and end times of both events.
    const [startTime1, endTime1] = event1;
    const [startTime2, endTime2] = event2;

    // Check for overlap: if one event's start time is less than or equal to the other event's end time
    // and vice versa, there is a conflict.
    if (
        (startTime1 <= endTime2 && endTime1 >= startTime2) || // Check if event1 overlaps with event2
        (startTime2 <= endTime1 && endTime2 >= startTime1)   // Check if event2 overlaps with event1
    ) {
        return true; // Conflict exists
    } else {
        return false; // No conflict
    }
}
