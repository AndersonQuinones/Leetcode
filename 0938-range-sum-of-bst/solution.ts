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
}

// Example usage
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(18);

const low = 7;
const high = 15;
const result = rangeSumBST(root, low, high);
console.log(result); // Output should be 32 (7 + 10 + 15)
I've added comments to each section of the code to explain its purpose and how it contributes to calculating the sum of values within the specified range in a binary search tree.





