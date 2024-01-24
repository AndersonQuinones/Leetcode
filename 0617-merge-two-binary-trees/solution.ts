function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    // If either tree is null, return the other tree as the result.
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    // Create a new node with the sum of values from both trees.
    const mergedRoot = new TreeNode(root1.val + root2.val);

    // Recursively merge the left and right subtrees.
    mergedRoot.left = mergeTrees(root1.left, root2.left);
    mergedRoot.right = mergeTrees(root1.right, root2.right);

    return mergedRoot;
}
