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

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
    }

    print() {
        let str = "";
        let curr = this.head;
        while (curr !== null) {
            str += curr.val + "-->";
            curr = curr.next;
        }
        console.log(str);
    }

    contains(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.val === target) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");

console.log(list.contains("a")); // true
console.log(list.contains("b")); // true
console.log(list.contains("c")); // true
console.log(list.contains("d")); // false

// console.log(list.head)
// list.print();

// linked list access O(n), insert O(1), delete O(1)
// linked list is used as a component for some advance data structure like stacks and queue
// more efficent for insertion and deletion than arrays
// does not require contiguous memory addressing
