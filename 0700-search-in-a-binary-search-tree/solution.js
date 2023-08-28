var searchBST = function(root, val) {
    // If the current root is null, return null as the subtree doesn't exist
    if (!root) {
        return null;
    }

    // If the current root's value matches the target value, return the root node
    if (root.val === val) {
        return root;
    }
    // If the target value is less than the current root's value, search in the left subtree
    else if (val < root.val) {
        return searchBST(root.left, val);
    }
    // If the target value is greater than the current root's value, search in the right subtree
    else {
        return searchBST(root.right, val);
    }
};
