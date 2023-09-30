function isMonotonic(nums: number[]): boolean  {
    // Check if the array has 0 or 1 element, which is considered monotonic.
    if (nums.length <= 1) {
        return true;
    }
    
    // Initialize flags to track whether the array is increasing or decreasing.
    let increasing = false;
    let decreasing = false;
    
    // Iterate through the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // Check if the current element is greater than the previous element.
        if (nums[i - 1] < nums[i]) {
            increasing = true; // Set the increasing flag to true.
        } 
        // Check if the current element is smaller than the previous element.
        else if (nums[i - 1] > nums[i]) {
            decreasing = true; // Set the decreasing flag to true.
        }
        
        // If both increasing and decreasing conditions are met, it's not monotonic.
        if (increasing && decreasing) {
            return false;
        }
    }
    
    // If either increasing or decreasing is true, it's monotonic.
    return true;
}
