function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let currA = headA;
    let currB = headB;

    // Traverse both lists until an intersection is found or both reach the end (null)
    while (currA !== currB) {
        // Move to the next node in the respective list, or wrap around to the other list
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }

    // Return the intersected node or null
    return currA;
}
