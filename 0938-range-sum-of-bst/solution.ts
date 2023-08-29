function rangeSumBST(root, low, high) {
    // Base case: If the current node is null, return 0 as there's no value to consider
    if (!root) {
        return 0;
    }

    let sum = 0;

    // Check if the current node's value falls within the specified range
    if (root.val >= low && root.val <= high) {
        sum += root.val; // Add the current node's value to the sum
    }

    // Recursively calculate the sum for the left subtree
    sum += rangeSumBST(root.left, low, high);

    // Recursively calculate the sum for the right subtree
    sum += rangeSumBST(root.right, low, high);

    return sum; // Return the total sum of values within the specified range
};
