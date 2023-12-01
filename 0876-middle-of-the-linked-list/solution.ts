function middleNode(head: ListNode | null): ListNode | null {
    // Initialize two pointers, slow and fast
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Traverse the list using two pointers
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // At this point, 'slow' points to the middle or second middle node
    return slow;
};
