function getDecimalValue(head: ListNode | null): number {
     let decimalValue = 0;

  while (head !== null) {
    // Shift the current decimal value to the left and add the current node's value
    decimalValue = (decimalValue << 1) | head.val;
    head = head.next;
  }

  return decimalValue;
};
