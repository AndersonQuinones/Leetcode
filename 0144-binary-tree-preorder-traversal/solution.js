function preorderTraversal(root) {
    // Base case: if the root is null, return an empty array.
    if (!root) return [];

    // Return an array with the current root value followed by the results
    // of preorder traversal on the left and right subtrees.
    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
    ];
};
