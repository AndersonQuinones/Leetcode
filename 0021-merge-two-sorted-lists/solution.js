function mergeTwoLists(list1, list2) {
  // Dummy node to simplify code
  const dummy = new ListNode(0);
  let current = dummy;

  // Traverse both lists until one of them becomes empty
  while (list1 !== null && list2 !== null) {
    // Compare values and append the smaller node to the merged list
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If one of the lists is not empty, append the remaining nodes
  if (list1 !== null) {
    current.next = list1;
  }

  if (list2 !== null) {
    current.next = list2;
  }

  return dummy.next; // Head of the merged list
}

// Helper function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
