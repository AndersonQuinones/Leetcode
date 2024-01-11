function removeElements(head: ListNode | null, val: number): ListNode | null {
    // Create a dummy node to simplify edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            // Remove the node with the specified value
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return dummy.next;
};
