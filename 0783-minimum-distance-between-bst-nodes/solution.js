function minDiffInBST(root) {
    // Initialize minimum difference to positive infinity
    let minDiff = Infinity;
    // Initialize previous node's value to null
    let prevValue = null;

    /**
     * Performs an in-order traversal of the BST and updates the minimum difference.
     * @param {TreeNode} node - The current node in the traversal.
     */
    const inOrderTraversal = (node) => {
        // Base case: If the node is null, return
        if (node === null) {
            return;
        }

        // Recursive call on the left subtree
        inOrderTraversal(node.left);

        // Check and update minimum difference
        if (prevValue !== null) {
            minDiff = Math.min(minDiff, node.val - prevValue);
        }

        // Update previous node's value
        prevValue = node.val;

        // Recursive call on the right subtree
        inOrderTraversal(node.right);
    };

    // Start in-order traversal from the root
    inOrderTraversal(root);

    // Return the calculated minimum difference
    return minDiff;
}
