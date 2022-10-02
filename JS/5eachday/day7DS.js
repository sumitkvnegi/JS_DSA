// Data Structures allow you to manage data
// Examples: Arrays, Objects, Maps, Sets
// Different Tasks Require Different Data Structures

// Arrays [1,3,6,2]
/* 
    Insertion order is kept 
    Element access via index 
    Iterable (=you can use the for-of loop)
    Size adjusts dynamically
    Duplicate values are allowed
    Deletion and finding elements can require "extra work"
*/

// Sets 
// new Set() -> set.add('items')
/* 
    Insertion order is not stored / memorized
    Element access and extraction via method
    Iterable (=you can use the for of loop)
    Size adjusts dynamically
    Duplicate values are not allowed
    Deletion and finding elements is trivial and fast
*/

/* const s = new Set(['kv']);
console.log(s.has('kv'));
s.add(1000);
s.delete('kv');
console.log(s); */

// Objects {key:value,func(){}}
/* 
    Unordered key-value pairs
    Element access via key
    Not iterable (only with for-in)
    Keys are unique, values are not
    Keys have to be strings , numbers or symbols
    Can store data & "functionality" (methods)
*/

/* const person = {
    name: 'max',
    age: 32,
    hobbies: ['roaming in forest'],
    greet() {
        console.log('Hi i am ' + this.name);
    },
}

console.log("1 " + person['hobbies']);
console.log("2 " + person.hobbies);
delete person.age;
for (let key in person) {
    console.log(person[key]);
}
person.greet(); */

// Maps 
// new Map() -> map.set('items)
/* 
    Ordered key - value pairs
    Element access via key
    iterable (=you can use the for-of loop)
    Keys are unique, values are not
    Keys can be anything (incl. reference values like arrays)
    Pure data storage, optimized for data access
*/

/* const result = new Map();
result.set('name', 'max');
result.set('average', 2.2);

for (const el of result) {
    console.log(el);
}

console.log(result);
console.log(result.get('name'));
result.delete('average');
console.log(result);
*/

// WeakSet and WeakMap
// Variations of Set and Map
// Values and keys are only "weakly referenced" -> Garbage collection can delete values and keys if not used anywhere else in the app

/* Custom Data Structure */
// Linked List
class LinkedList {
    constructor() {
        this.head = null; // First element of the list
        this.tail = null; // Last element of the list
    }

    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
        if (!this.head) this.head = newNode;
    }

    prepend(value) {
        const newNode = { value: value, next: this.head };
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = { value: value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }


    find(value) {
        if (!this.head) return null;
        let curNode = this.head;
        while (curNode) {
            if (curNode.value === value) return curNode;
            curNode = curNode.next;
        }
        return null;
    }
    delete(value) {
        if (!this.head) return;
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        let curNode = this.head;
        while (curNode.next) {
            if (curNode.next.value === value) curNode.next = curNode.next.next;
            else curNode = curNode.next;
        }
        if (this.tail.value === value) this.tail = curNode;
    }

    toArray() {
        const elements = [];
        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hi');
linkedList1.append(true);
linkedList1.append(20.2);
linkedList1.prepend('first value');
linkedList1.delete('hi');
linkedList1.delete(20.2);
linkedList1.insertAfter('new inserted value', 'first value');
console.log(linkedList1.toArray());
console.log(linkedList1.find('first value'));
