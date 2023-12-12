function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Base case: If the array is empty, return null (empty tree).
    if (nums.length === 0) {
        return null;
    }

    // Find the index of the middle element in the array.
    const midIndex = Math.floor(nums.length / 2);

    // Create a new tree node with the middle element as the root.
    const root = new TreeNode(nums[midIndex]);

    // Recursively construct the left subtree using the left half of the array.
    root.left = sortedArrayToBST(nums.slice(0, midIndex));

    // Recursively construct the right subtree using the right half of the array.
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));

    // Return the root of the resulting BST.
    return root;
}
