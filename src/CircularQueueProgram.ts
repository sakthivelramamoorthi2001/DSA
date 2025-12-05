//ts-worksheet

class MyNode {
    data: number;
    next: MyNode | null = null;


    constructor(k: number) {
        this.data = k;
    }

}

class MyCircularQueue {

    head: MyNode | null = null;
    tail: MyNode | null = null;
    size: number = 0
    maxSize: number = 0;


    constructor(k: number) {
        this.maxSize = k;
    }

    enQueue(value: number): boolean {

        if (this.size == this.maxSize) {
            return false
        }

        let newNode = new MyNode(value);


        if (this.size == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return true;
        }


        let temp: MyNode | null = this.head;

        while (temp?.next) {
            temp = temp.next;
        }

        if (temp) {
            temp.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return true;
    }

    deQueue(): boolean {

        if (this.isEmpty()) {
            return false
        }

        if (this.head) {
            this.head = this.head.next;
        }
        this.size--;
        return true;

    }

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.head ? this.head.data : -1;
        }
    }

    Rear(): number {

        if (this.isEmpty()) {
            return -1;
        } else {
            return this.tail ? this.tail.data : -1;
        }

    }

    isEmpty(): boolean {
        return this.size == 0;
    }

    isFull(): boolean {
        return this.size == this.maxSize
    }

}
const myCircularQueue = new MyCircularQueue(8);

myCircularQueue.enQueue(3);
myCircularQueue.enQueue(9);
myCircularQueue.enQueue(5);
myCircularQueue.enQueue(0);
myCircularQueue.deQueue();
myCircularQueue.deQueue();
myCircularQueue.isEmpty();
myCircularQueue.isEmpty();
myCircularQueue.Rear();
myCircularQueue.Rear();
myCircularQueue.deQueue();



// myCircularQueue.enQueue(4);


console.log(myCircularQueue);


myCircularQueue.print()


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// myCircularQueue.print()
// myCircularQueue.enQueue(2); // return True
// myCircularQueue.print()
// myCircularQueue.enQueue(3); // return True
// myCircularQueue.print()

// myCircularQueue.enQueue(4); // return False
// myCircularQueue.print()

// myCircularQueue.Rear();     // return 3
// myCircularQueue.print()

// myCircularQueue.isFull();   // return True
// myCircularQueue.print()

// myCircularQueue.deQueue();  // return True
// myCircularQueue.print()

// myCircularQueue.enQueue(4); // return True
// myCircularQueue.print()

// myCircularQueue.Rear();     // return 4
// myCircularQueue.print()

