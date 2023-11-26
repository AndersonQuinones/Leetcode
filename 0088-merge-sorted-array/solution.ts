function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // Index for nums1
    let j = n - 1; // Index for nums2
    let k = m + n - 1; // Index for the merged array

    // Start from the end of both arrays and move towards the beginning
    while (i >= 0 && j >= 0) {
        // Compare the elements from both arrays and place the larger one at nums1[k]
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
