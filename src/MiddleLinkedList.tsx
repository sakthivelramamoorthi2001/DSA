import type { MyNode } from "./LinkedList";



function FindMiddleNode(head: MyNode<String>) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        if (fast.next.next) {
            fast = fast.next.next;
        }

        if (slow.next) {
            slow = slow.next;
        }

    }

    return slow;

}
