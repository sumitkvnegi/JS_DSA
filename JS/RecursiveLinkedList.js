class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {

        if (this.head === null) {
            this.head = new Node(val);
            return;
        }

        this._append(val, this.head);
    }

    _append(val, curr) {
        if (curr.next === null) {
            curr.next = new Node(val);
            return;
        }

        this._append(val, curr.next);
    }

    print() {
        const output = this._print(this.head);
        console.log(output);
    }

    _print(curr) {
        if (curr === null) return '';
        return curr.val + "-->" + this._print(curr.next);
    }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");

// console.log(list.head)
list.print();