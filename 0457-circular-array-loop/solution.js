function circularArrayLoop(nums) {
    let size = nums.length;

    // Loop through each element in the array
    for (let i = 0; i < size; i++) {
        let slow = i; // Initialize slow pointer
        let fast = i; // Initialize fast pointer
        let forward = nums[i] > 0; // Determine the direction of the loop

        // Iterate until a cycle is detected or the loop breaks
        while (true) {
            // Move the slow pointer to the next step
            slow = nextStep(slow, nums[slow], size);
            // If the current step does not form a cycle, break the loop
            if (isNotCycle(nums, forward, slow)) {
                break;
            }

            // Move the fast pointer twice as fast as the slow pointer
            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) {
                break;
            }
            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) {
                break;
            }

            // If slow and fast pointers meet, a cycle is detected
            if (slow === fast) {
                return true;
            }
        }
    }
    // If no cycle is found after iterating through all elements, return false
    return false;
}

// A function to calculate the next step
function nextStep(pointer, value, size) {
    let result = (pointer + value) % size; // Calculate the next step
    if (result < 0) {
        result += size; // Ensure result is within the array bounds
    }
    return result;
}

// A function to detect if a cycle doesn't exist
function isNotCycle(nums, prevDirection, pointer) {
    let currDirection = nums[pointer] >= 0; // Determine the direction of the current step
    // Check if the direction has changed or if the step is a multiple of the array size
    if (prevDirection !== currDirection || Math.abs(nums[pointer] % nums.length) === 0) {
        return true; // Return true if no cycle is detected
    } else {
        return false; // Return false if a cycle exists
    }
}
