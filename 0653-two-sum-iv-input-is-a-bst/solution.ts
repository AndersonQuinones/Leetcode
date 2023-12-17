function dfs(node: TreeNode | null): boolean {
        // If the node is null, return false
        if (!node) {
            return false;
        }

        // Calculate the complement needed to achieve the target sum
        const complement = k - node.val;

        // Check if the complement is in the set of seen values
        if (seenValues.has(complement)) {
            return true; // Found a pair with the target sum
        }

        // Add the current node's value to the set
        seenValues.add(node.val);

        // Continue the search in the left and right subtrees
        return dfs(node.left) || dfs(node.right);
    }

    // Start the DFS from the root and return the result
    return dfs(root);
}
