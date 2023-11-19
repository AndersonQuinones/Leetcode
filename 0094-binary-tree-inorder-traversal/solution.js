var inorderTraversal = function(root) {
    // Base case: If the root is null, return an empty array.
    if (!root) return [];

    // Recursive steps:
    // 1. Traverse the left subtree and collect its inorder traversal.
    // 2. Add the current node's value to the traversal array.
    // 3. Traverse the right subtree and collect its inorder traversal.
    return [
     ...inorderTraversal(root.left),
     root.val,
     ...inorderTraversal(root.right),
    ];
};
