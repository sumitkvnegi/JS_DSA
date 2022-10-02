/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('c');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// a->b->c->d->null

function print(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}
print(a);

let res = "";
function printrecur(head) {
    if (head === null) return;
    res += head.val + "->";
    return printrecur(head.next);
}
printrecur(a);
console.log(res + "null"); */

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('c');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function linkedListValues(head) {
    const values = [];
    let curr = head;
    while (curr !== null) {
        values.push(curr.val);
        curr = curr.next;
    }
    console.log(values);
}
linkedListValues(a);

function linkedListValues(head) {
    const values = [];
    fill(head, values);
    console.log(values);
}
function fill(head, values) {
    if (head === null) return;
    values.push(head.val);
    fill(head.next, values);
}
linkedListValues(a);
 */

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(4);
const c = new Node(5);
const d = new Node(0);

a.next = b;
b.next = c;
c.next = d;

let sum = 0;
function sumList(head) {
    if (head === null) return 0;
    return head.val + sumList(head.next);
}
console.log("sum: " + sumList(a));
 */

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(4);
const c = new Node(5);
const d = new Node(0);

a.next = b;
b.next = c;
c.next = d;

let target = 5;
function find(head, target) {
    while (head !== null) {
        if (head.val === target) return true;
        head = head.next;
    }
    return false;
}
console.log("Target exists: " + find(a, target));

function findr(head, target) {
    if (head === null) return false;
    if (head.val === target) return true;
    return findr(head.next, target);
}
console.log("Target exists: " + findr(a, target));
 */

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(4);
const c = new Node(5);
const d = new Node(0);

a.next = b;
b.next = c;
c.next = d;

let index = 2;
function find(head, index) {
    if (head === null) return null;
    if (index === 0) return head.val;
    return find(head.next, index - 1);
}
console.log("Index Value: " + find(a, index));
 */

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(4);
const c = new Node(5);
const d = new Node(0);

a.next = b;
b.next = c;
c.next = d;

// function reverse(head) {
//     let prev = null;
//     let curr = head;
//     while (curr !== null) {
//         const next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// }

function reverse(head, prev = null) {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverse(next, head);
}

let res = "";
function printrecur(head) {
    if (head === null) return;
    res += head.val + "->";
    return printrecur(head.next);
}
printrecur(reverse(a));
console.log(res + "null");
 */

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("c");

a.next = b;
b.next = c;

const p = new Node("P");
const q = new Node("Q");
const r = new Node("R");

p.next = q;
q.next = r;

let l1 = a, l2 = p;

let resl1 = "";
function printrecurl1(head) {
    if (head === null) return;
    resl1 += head.val + "->";
    return printrecurl1(head.next);
}
printrecurl1(l1);
console.log("l1: " + resl1 + "null");

let resl2 = "";
function printrecurl2(head) {
    if (head === null) return;
    resl2 += head.val + "->";
    return printrecurl2(head.next);
}
printrecurl2(l2);
console.log("l2: " + resl2 + "null");

// function zip(l1, l2) {
//     let count = 0;
//     let tail = l1;
//     let curr1 = l1.next;
//     let curr2 = l2;
//     while (curr1 !== null && curr2 !== null) {
//         if (count % 2 == 0) {
//             tail.next = curr2;
//             curr2 = curr2.next;
//         } else {
//             tail.next = curr1;
//             curr1 = curr1.next;
//         }
//         tail = tail.next;
//         count += 1;
//     }

//     if (curr1 !== null) tail.next = curr1;
//     if (curr2 !== null) tail.next = curr2;

//     return l1;
// }

function zip(l1, l2) {
    if (l1 === null && l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    const next1 = l1.next;
    const next2 = l2.next;
    l1.next = l2;
    l2.next = zip(next1, next2);

    return l1;
}

let zipres = "";
function printrecur(head) {
    if (head === null) return;
    zipres += head.val + "->";
    return printrecur(head.next);
}
printrecur(zip(l1, l2));
console.log("zipped: " + zipres + "null");
 */