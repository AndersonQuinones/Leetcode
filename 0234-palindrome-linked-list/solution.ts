function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true; // An empty list or a list with one element is a palindrome
    }

    // Find the middle of the linked list using the two-pointer approach
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let reversedSecondHalf = null;
    while (slow) {
        const temp = slow.next;
        slow.next = reversedSecondHalf;
        reversedSecondHalf = slow;
        slow = temp;
    }

    // Compare the reversed second half with the first half
    while (reversedSecondHalf) {
        if (head!.val !== reversedSecondHalf.val) {
            return false;
        }
        head = head!.next;
        reversedSecondHalf = reversedSecondHalf.next;
    }

    return true;
};
