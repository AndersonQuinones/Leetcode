function getTargetCopy(original, cloned, target) {
  // Base case: If the original tree is null, return null
  if (!original) {
    return null;
  }

  // If the current node in the original tree is the target node
  if (original === target) {
    // Return the corresponding node in the cloned tree
    return cloned;
  }

  // Search in the left subtree for the target node
  let leftResult = getTargetCopy(original.left, cloned.left, target);
  // If found in the left subtree, return the result
  if (leftResult) {
    return leftResult;
  }

  // If not found in the left subtree, search in the right subtree
  return getTargetCopy(original.right, cloned.right, target);
};
