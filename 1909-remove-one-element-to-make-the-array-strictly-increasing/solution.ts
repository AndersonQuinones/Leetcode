function canBeIncreasing(nums: number[]): boolean {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            // Try removing the element at index i
            const candidate1 = [...nums.slice(0, i), ...nums.slice(i + 1)];
            const candidate2 = [...nums.slice(0, i - 1), ...nums.slice(i)];

            let isCandidate1Increasing = true;
            let isCandidate2Increasing = true;

            // Check if candidate1 is strictly increasing
            for (let j = 1; j < candidate1.length; j++) {
                if (candidate1[j - 1] >= candidate1[j]) {
                    isCandidate1Increasing = false;
                    break;
                }
            }

            // Check if candidate2 is strictly increasing
            for (let j = 1; j < candidate2.length; j++) {
                if (candidate2[j - 1] >= candidate2[j]) {
                    isCandidate2Increasing = false;
                    break;
                }
            }

            // If either candidate1 or candidate2 is strictly increasing, return true
            if (isCandidate1Increasing || isCandidate2Increasing) {
                return true;
            } else {
                return false;
            }
        }
    }

    return true; // The array is already strictly increasing
};
