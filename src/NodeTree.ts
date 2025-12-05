//ts-worksheet
export class MyNode<T> {

    data: T;
    next: MyNode<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null
    }
}


export class LinkedList<T> {

    head: MyNode<T> | null = null;
    size = 0;


    constructor(data: T) {
        let newNode = new MyNode<T>(data);
        this.insetNode(newNode);

    }


    insert(data: T, index?: number) {
        let newNode = new MyNode<T>(data);

        if (index) {
            return this.insertNodeAtIndex(newNode, index);
        } else {
            return this.insetNode(newNode)
        }


    }

    isEmpty() {
        return this.size == 0;
    }

    insertNodeAtIndex(newNode: MyNode<T>, index: number) {

        if (this.isEmpty() && index > 0) {
            throw new Error("List is already Empty")
        }

        if (index < 0 || index > this.size) {
            throw new Error("index beyond hte limit")
        }

        if (this.isEmpty()) {
            return this.insetNode(newNode);
        }


        let tempIndex = 0;
        let curretnNode = this.head;
        let prevNode = null;

        while (tempIndex < index) {
            prevNode = curretnNode;
            curretnNode = curretnNode!.next;
            tempIndex++;
        }

        prevNode!.next = newNode;
        newNode.next = curretnNode;
        this.size++;

    }

    insetNode(newNode: MyNode<T>) {

        if (this.size == 0) {
            this.head = newNode;
            this.size++;
            return;
        }

        let temp = this.head;

        while (temp?.next) {
            temp = temp.next
        };
        temp!.next = newNode;
        this.size++;
    }


    printyFy() {
        let temp = this.head;
        while (temp?.next) {
            console.log(temp.data + ' -> ');

            temp = temp.next;
        }

    }
}


export class StackList<T> {
    head: MyNode<T> | null = null;
    size = 0;

    constructor() {

    };

    push(data: T) {
        let newNode = new MyNode<T>(data)
        if (this.size == 0) {
            this.head = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }

    pop() {

        if (this.size == 0) {
            throw new Error("list is empty you cant delete it")
        }
        this.size--
        this.head = this.head!.next;
    }


    seek() {
        if (this.size == 0) {
            throw new Error("list is empty you cant peek it")
        }
        return this.head?.data;
    }


}


console.log("fdf");


let stack = new StackList<string>();

stack.push("sakt1")
stack.push("sakt2")
stack.pop()
stack.seek() 

console.log(stack);
