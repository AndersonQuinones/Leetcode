function twoOutOfThree(nums1, nums2, nums3) {
    const result = []; // Initialize an empty array to store the result

    // Helper function to add a number to the result array if it's not already present
    const addToResult = (num) => {
        if (!result.includes(num)) { // Check if the number is not already in the result array
            result.push(num); // If not present, add it to the result array
        }
    };

    // Iterate through nums1 array
    for (const num of nums1) {
        // Check if the current number is present in either nums2 or nums3 arrays
        if (nums2.includes(num) || nums3.includes(num)) {
            addToResult(num); // If yes, add it to the result array
        }
    }

    // Iterate through nums2 array (similar logic as above)
    for (const num of nums2) {
        if (nums1.includes(num) || nums3.includes(num)) {
            addToResult(num);
        }
    }

    // Iterate through nums3 array (similar logic as above)
    for (const num of nums3) {
        if (nums1.includes(num) || nums2.includes(num)) {
            addToResult(num);
        }
    }

    return result; // Return the result array containing distinct values present in at least two arrays
};
