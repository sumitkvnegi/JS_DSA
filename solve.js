// middle of linked list

/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function middle(head){
    let fast = head;
    let slow = head;
     while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
     }

     return slow;
}

console.log(middle(a));
 */

// palindrome linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(1);

a.next = b;
b.next = c;
c.next = d;

// 1-->2-->2-->1 true

// 1-->2-->2-->3<--2<--2<--1 method to solve

function reverse(head){
    let cur = head; //2
    let prev = null;
    let next;

    while(cur){
        next = cur.next;     console.log(next)
        cur.next = prev;     console.log("cur.next"+" "+cur.next)
        prev = cur;  console.log(prev)
        cur = next; console.log(cur)
    }
    // 2<--1<--null
    console.log(prev)
    return prev;
};

function palindrome(head){
    let fast = head;
    let slow = head;
    let startPointer = head;
    let length = 0;
    while(fast&&fast.next){
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }

    // 1-->2-->2-->1
    console.log(slow)
    
    let mid = reverse(slow);

    while(length){
        length--;
        if(mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }
    return true;
}
// T:O(n) S:O(1)
console.log(palindrome(a));














































1./* function anagram(arr){
    const sorted = arr.map(i=>i.split("").sort().join("")); 
    const hash = {};
    for(let i=0; i<arr.length; i++){
        if(!hash[sorted[i]]){
            hash[sorted[i]]=[arr[i]];
        }else{
            hash[sorted[i]].push(arr[i]);
        }
    }    
    return Object.values(hash);
    // T:O(n.nlogn) S:O(n)
} */
/* function anagram(arr){
    let obj = {};
    let res = [];
    for(let i=0; i<arr.length; i++){
        obj[arr[i].split("").sort().join("")]+=","+arr[i];
    }
    for(let key in obj){
        res.push(obj[key].split(",").splice(1));
    } 
    
    return res;
} */

/* let arr = ["eat","tea","tan","ate","nat","bat"];
console.log(anagram(arr)); */