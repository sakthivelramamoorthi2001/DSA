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

    private isEmpty() {
        return this.size == 0;
    }

    private insertNodeAtIndex(newNode: MyNode<T>, index: number) {

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

    private insetNode(newNode: MyNode<T>) {

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

    delete(index: number) {
        if (this.isEmpty() && index > 0) {
            throw new Error("List is already Empty")
        }

        if (index < 0 || index > this.size) {
            throw new Error("index beyond hte limit")
        }

        let tempIndex = 0;
        let temp = this.head;


        while (tempIndex < index) {
            tempIndex++;
            temp = temp!.next;
        }

        temp!.next = temp!.next!.next;

    }


    printyFy() {
        let temp = this.head;
        let index = 0;
        while (temp != null) {
            console.log(index, ' - ', temp.data);
            index++;
            temp = temp!.next;
        }

    }
}

const list = new LinkedList<String>("sakt");

list.insert("sakthi2")
list.insert("sakthi3")
list.insert("sakthi2.1", 1);
list.delete(3)
list.printyFy();