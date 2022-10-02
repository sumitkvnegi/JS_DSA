// Queue Data Structure (First In First Out)
// Basic Operations
// Enqueue, Dequeue, IsEmpty, IsFull, Peek

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }

    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.items);

queue.dequeue();

console.log(queue.items);

console.log("Peek: " + queue.peek());

console.log("IsEmpty: " + queue.isEmpty());

console.log("Size: " + queue.size());

queue.clear();

console.log(queue.items);

console.log(queue.isEmpty());


//  There are four different types of queues:
//  Simple Queue, Circular Queue, Priority Queue, Double Ended Queue
