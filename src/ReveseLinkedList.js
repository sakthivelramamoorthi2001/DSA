class Mode {
    next = null
    val = null

    constructor(data) {
        this.val = data;
        this.next = null
    }
}

const n1 = new Mode("1")
const n2 = new Mode("2")
const n3 = new Mode("3")

n1.next = n2;
n2.next = n3

let head = n1;


function reverce(head) {


    let tempHead = head;
    let reverceList = null;

    while (tempHead) {

        let newNode = new Mode(tempHead.val);

        newNode.next = reverceList;

        reverceList = newNode;

        console.log(tempHead.val);

        tempHead = tempHead.next
    }

    let tempRev = reverceList;

    while(tempRev){
        console.log(tempRev.val);
         
        tempRev = tempRev.next;
    }
    



}

reverce(head);



1, 2, 3