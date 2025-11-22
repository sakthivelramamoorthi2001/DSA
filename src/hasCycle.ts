import { MyNode } from "./LinkedList";

type ListT = MyNode<String> | null;
function hasCycle(head: ListT): boolean {
    let slow: ListT = head;
    let fast: ListT = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow?.next || null;

        if (fast == slow) {
            return true;
        }

    }

    return false;

};