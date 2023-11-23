function checkTree(root) {
  // Check if the root and its left and right children exist
  if (root && root.left && root.right) {
    // Check if the value of the root is equal to the sum of its left and right children
    return root.val === root.left.val + root.right.val;
  }

  // Return false if any of the conditions are not met
  return false;
}
