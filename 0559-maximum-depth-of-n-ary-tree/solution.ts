function maxDepth(root) {
    // Base case: If the current node is null, the depth is 0.
    if (!root) {
        return 0;
    }

    let maxChildDepth = 0;

    // Iterate through each child node and find the maximum depth of the children.
    for (const child of root.children) {
        const childDepth = maxDepth(child);
        maxChildDepth = Math.max(maxChildDepth, childDepth);
    }

    // The maximum depth of the current node is the maximum child depth plus 1.
    return maxChildDepth + 1;
}
