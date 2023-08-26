var evaluateTree = function(root) {
    // If the node is a leaf node with value 0 or 1, return the corresponding boolean value
    if (root.val === 0 || root.val === 1) {
        return root.val === 1;
    }

    // Recursively evaluate the left and right subtrees
    const left = evaluateTree(root.left);
    const right = evaluateTree(root.right);

    // If the node's value is 2 (OR), return the result of left OR right
    if (root.val === 2) {
        return left || right;
    }
    // If the node's value is 3 (AND), return the result of left AND right
    else if (root.val === 3) {
        return left && right;
    }
};

// Example usage
// Construct the tree using your provided representation
const tree = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    }
};

const result = evaluateTree(tree);
console.log(result); // Output should be true
