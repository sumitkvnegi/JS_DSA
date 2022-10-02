// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// a.next = b;
// b.next = c;
// c.next = d;
// // d.next = b; // for cycles problem 

// let res = "";
// const print = (head) => {
//     if (head === null) return;
//     res += `[${head.val}]` + "->";
//     print(head.next);
// }

// print(a);
// console.log(res + "null");

//[1.] // Reverse a linked list
/*
// iterative method
// const reverseList = (head) => {
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

// recursive method
const reverseList = (curr, prev = null) => {
    if (curr === null) return prev;
    const next = curr.next;
    curr.next = prev;
    return reverseList(next, curr);
}

const newHead = reverseList(a);

res = "";
print(newHead);
console.log(res + "null"); */

//[2.] // Linked list cycle

// Using Floyd hare and tortoise
/* const hasCycle = (head) => {
    if (!head) return false;
    let slow = head;
    let fast = head;

    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

console.log(hasCycle(a));

// Using Set
const hasCycle = (head) => {
    if (!head) return false;
    const nodeSet = new Set();
    let node = head;
    while (node) {
        if (nodeSet.has(node)) return true;
        nodeSet.add(node);
        node = node.next;
    }
    return false;
}
console.log(hasCycle(a));

// Using Flag
const hasCycle = (head) => {
    if (!head) return false;
    let node = head;
    while (node) {
        if(node.hasVisted===true) return true;
        node.hasVisted = true;
        node = node.next;
    }
    return false;
}
console.log(hasCycle(a));
*/

//[3.] // Merge two sorted lists
function Node(data, next) {
    this.data = data;
    this.next = next;
}
function merge(l1, l2) {
    // create new linkled list pointer 
    let l3 = new Node(null, null);
    let prev = l3;

    // while both linked lists are not empty
    while (l1 !== null && l2 !== null) {
        if (l1.data <= l2.data) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    //once we reach end of a linked list, append the other
    //list because we know it is already sorted
    if (l1 === null) prev.next = l2;
    if (l2 === null) prev.next = l1;

    //return the sorted linked list
    return l3.next;
}

//create first linked list
let n3 = new Node(10, null);
let n2 = new Node(3, n3);
let n1 = new Node(1, n2);
let l1 = n1;
//create second linked list
let n6 = new Node(9, null);
let n5 = new Node(6, n6);
let n4 = new Node(1, n5);
let l2 = n4;
let res = "";
const print = (head) => {
    if (head === null) return;
    res += `${head.data}` + " -> ";
    print(head.next);
}
print(l1)
console.log("List1: " + res + "null");
res = "";
print(l2)
console.log("List2: " + res + "null");
res = "";
let e = merge(l1, l2);
print(e);
console.log("New Merge List: " + res + "null");
