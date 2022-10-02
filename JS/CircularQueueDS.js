class CircularQueue {
    constructor(size) {
        this.element = [];
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.back = -1;
    }

    isEmpty() {
        return (this.length == 0);
    }

    enqueue(element) {
        if (this.length >= this.size) throw (new Error("Max Length Excceded"));
        this.back++;
        this.element[this.back % this.size] = element;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("No Element");
        }
        const value = this.getFront();
        this.element[this.front % this.size] = null;
        this.front++;
        this.length--;
        return value;
    }

    getFront() {
        if (this.isEmpty()) throw (new Error("No Elements int the queue"));
        return this.element[this.front % this.size]
    }

    clear() {
        this.element = new Array();
        this.length = 0;
        this.back = 0;
        this.front = -1;
    }
}

let cqueue = new CircularQueue(3);
cqueue.enqueue(2);
cqueue.enqueue(3);
cqueue.enqueue(4);
console.log(cqueue.element);

cqueue.dequeue();

console.log(cqueue.element);

console.log("IsEmpty: " + cqueue.isEmpty());

cqueue.enqueue(4);


console.log(cqueue.element);

cqueue.clear();

console.log(cqueue.element);

console.log(cqueue.isEmpty());
