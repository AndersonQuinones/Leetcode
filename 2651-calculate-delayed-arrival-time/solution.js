function findDelayedArrivalTime(arrivalTime, delayedTime) {
    // Calculate the total time including delay
    let totalTime = arrivalTime + delayedTime;
    
    // Take the modulus to handle cases where the arrival time exceeds 24 hours
    let arrivalHour = totalTime % 24;
    
    // Return the arrival hour
    return arrivalHour;
};
