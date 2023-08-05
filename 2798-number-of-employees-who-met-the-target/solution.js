var numberOfEmployeesWhoMetTarget = function(hours, target) {
    // Using the `reduce` method to iterate through the `hours` array and accumulate the count of employees who meet the target.
    // The `count` parameter keeps track of the total count of employees meeting the target.
    // The `hour` parameter represents the current hour value for the current employee being processed.
    return hours.reduce((count, hour) => {
        // If the `hour` is greater than or equal to the `target`, add 1 to the `count`; otherwise, add 0.
        // This condition is expressed as `(hour >= target ? 1 : 0)`.
        // If the condition is true, the expression evaluates to 1 (employee meets the target), otherwise 0 (employee does not meet the target).
        // This result is then added to the current `count` value.
        return count + (hour >= target ? 1 : 0);
    }, 0);
};
