// Binary Tree
// main node is called root , node having no children is called leaf node
// Binary tree is a tree in which every node have at most 2 children

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

// iterative
/* const depthFirstValues = (root) => {
    if(root===null) return [];
    const result = [];
    const stack = [root];
    while (stack.length > 0) {
        const curr = stack.pop();
        result.push(curr.val);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    return result;
} */

// recursive
const depthFirstValues = (root) => {
    if (root === null) return [];
    const leftval = depthFirstValues(root.left);
    const rightval = depthFirstValues(root.right);
    return [root.val, ...leftval, ...rightval];
}

console.log(depthFirstValues(a));