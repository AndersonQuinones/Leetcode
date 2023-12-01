function hasCycle(head) {
  // Check if the linked list is empty or has only one node (no cycle possible).
  if (!head || !head.next) {
    return false;
  }

  // Initialize two pointers: slow and fast.
  let slow = head;
  let fast = head.next;

  // Traverse the linked list until the slow and fast pointers meet (or fast reaches the end).
  while (slow !== fast) {
    // Check for the end of the linked list (no cycle).
    if (!fast || !fast.next) {
      return false;
    }

    // Move the slow pointer one step at a time.
    slow = slow.next;

    // Move the fast pointer two steps at a time.
    fast = fast.next.next;
  }

  // If the loop exits, it means the pointers met, indicating the presence of a cycle.
  return true;
}
