export class MyNode<T> {

    data: T;
    next: MyNode<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null
    }
}


export class LinkedList<T> {

    private head: MyNode<T> | null = null;
    private size = 0;


    constructor(data?: T) {
        if (data) {

            let newNode = new MyNode<T>(data);
            this.insetNode(newNode);

        }
    }

    length() {
        console.log(this.size);

        return this.size;
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

    deleteLastOne() {

        console.log('ff');

        if (this.isEmpty()) {
            throw new Error("List is alsready Empty");
        }

        let current = this.head, prev = null;
        while (current?.next) {
            prev = current;
            current = current.next;
        }

        console.log(current, 'curre');
        console.log(prev, 'prev');


        prev!.next = null;
        this.size--;


    }

    delete(index?: number) {

        if (!index) {
            return this.deleteLastOne();
        }

        if (this.isEmpty() && index > 0) {
            throw new Error("List is already Empty")
        }

        if (index < 0 || index > this.size) {
            throw new Error("index beyond hte limit")
        }

        let tempIndex = 0;
        let current = this.head,
            prevNode = null;


        while (tempIndex < index) {
            prevNode = current;
            current = current!.next
            tempIndex++;
        }
        if (prevNode?.next && current?.next) {
            prevNode!.next = current!.next;
            this.size--;
        }




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


const list = new LinkedList<String>();

list.insert("sakthi1")
list.insert("sakthi2")
list.insert("sakthi3");
list.insert("sakthi4");
list.insert("sakthi5");
list.printyFy()