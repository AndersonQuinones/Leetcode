// Define a recursive function for tree traversal (inorder traversal).
function traversal(node) {
    if (!node) {
        return []; // Return an empty array for null nodes.
    }

    // Recursively traverse the left subtree, visit the current node, and then traverse the right subtree.
    return [...traversal(node.left), node.val, ...traversal(node.right)];
}

// Define a function to find the second minimum value in a binary tree.
var findSecondMinimumValue = function(root) {
    if (!root) {
        return -1; // Return -1 for an empty tree or when no second minimum is found.
    }

    // Collect all values in the tree using the traversal function.
    const values = traversal(root);

    // Remove duplicates and sort the values in ascending order.
    const uniqueSortedValues = [...new Set(values)].sort((a, b) => a - b);

    // Check if there's a second minimum value.
    if (uniqueSortedValues.length >= 2) {
        return uniqueSortedValues[1]; // Return the second value.
    } else {
        return -1; // Handle the case where there is no second minimum value.
    }
};
