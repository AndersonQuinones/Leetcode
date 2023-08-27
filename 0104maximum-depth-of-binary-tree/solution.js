var maxDepth = function(root) {
    // If the tree is empty (null root), the depth is 0
    if (!root) {
        return 0;
    }

    // Initialize a queue to perform level-order traversal
    const queue = [];
    queue.push(root);
    let depth = 0; // Initialize the depth counter

    // Perform level-order traversal using the queue
    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes in the current level

        // Process all nodes in the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the first node

            // Enqueue the left and right children, if they exist
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        // Increment the depth after processing each level
        depth++;
    }

    // Return the final depth of the binary tree
    return depth;
};
