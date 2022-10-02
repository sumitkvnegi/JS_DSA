// Stack is collection of items
// LIFO data structure
// Its is used for tracking a history of steps, Backtracking algo, browser history

// Implement stack using array
/* const myStack = [];
myStack.push('a');
myStack.push('b');
myStack.pop(); */

//  Maximally Efficient Stack: O(1) time for push/pop , So we used linked list for making stack

/* class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(val) {
        if (this.size === 0) {
            this.top = new StackNode(val);
        } else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.size++;
    }

    getTop() {
        return this.top.val;
    }

    pop() {
        if (this.size === 0) return null;
        const popedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return popedNode.val;
    }
}

const myStack = new Stack();

myStack.push('a');
myStack.push('b');
myStack.push('c');
console.log(myStack.size);
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.getTop()); */

// Queue 
// Snake
/* 
    -queue for snake body
    -draw() draw grid with snakes body
    -move() take in a direction, manipulate queue
*/

class Snake {
    constructor() {
        this.snakebody = [
            [4, 1], [4, 2], [4, 3], [4, 4]
        ]
    }

    move(direction) {
        const delta = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            right: [0, 1],
        };

        const currentHead = this.snakebody[this.snakebody.length - 1];
        const [currRow, currCol] = currentHead;
        const [changeRow, changeCol] = delta[direction];
        const newHead = [currRow + changeRow, currCol + changeCol];
        this.snakebody.push(newHead);
        this.snakebody.shift();
    }

    draw() {
        const grid = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(' ');
            }
            grid.push(row);
        }
        this.snakebody.forEach(pos => {
            const [row, col] = pos;
            grid[row][col] = 'O';
        })
        console.clear();
        grid.forEach(row => console.log(row.join('|')));
    }

    play() {
        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', (keypress) => {
            if (keypress === 'w') this.move('up');
            if (keypress === 'a') this.move('left');
            if (keypress === 's') this.move('down');
            if (keypress === 'd') this.move('right');
            if (keypress === '\u0003') process.exit();
            this.draw();
        })

    }

}

const game = new Snake();
game.play();

/* game.draw();
console.log("------");
game.move('up');
game.move('down');
game.draw(); */