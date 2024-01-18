function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0; // Empty tree, no left leaves
    }

    let sum = 0;

    // Check if the left child is a leaf and add its value to the sum
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    // Recursively traverse the left and right subtrees
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
}
