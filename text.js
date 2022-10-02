// Binary tree 
class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const a = new Node(8);
const b = new Node(3);
const c = new Node(5);
const d = new Node(1);
const e = new Node(2);
const f = new Node(6);

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

/* 
        8
       / \
      3   5
     / \   \
    9   2   7
*/

// depth-first-values a b d e c f
// breadth-first-values a b c d e f


// T:O(n) S:O(n) using stack for depth first taversal

/* function depthFirstSearch(root){
    if(root == null) return [];
    const result = [];
    const stack = [root];

    while(stack.length>0){
        const current = stack.pop();
        // console.log(current.val);
        result.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return result; 
} */

function depthFirstSearch(root){
    if(root === null) return 0;
    return root.val + depthFirstSearch(root.left) + depthFirstSearch(root.right);
}

console.log("dfs:"+" "+depthFirstSearch(a));

function breadthFirstSearch(root, target){
    if(root == null) return [];
    let sum = 0;
    const queue = [root];
    let include = false;

    while(queue.length>0){
        const current = queue.shift();
        // console.log(current.val);
        if(target === current.val) include=true;
        sum+=current.val;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    console.log(include)
    return sum;
}

console.log("bfs:"+" "+breadthFirstSearch(a,2));

// includes 
// target value

function depthFirstSearchInclude(root,target){
    if(root === null) return false;
    if(root.val===target) return true;
    return depthFirstSearchInclude(root.left,target)
|| depthFirstSearchInclude(root.right,target);
}

console.log("Include:"+" "+depthFirstSearchInclude(a,2)); // use or logical condition

function min(root){
    if(root === null) return Infinity;
    return Math.min(root.val , min(root.left),min(root.right));
}

console.log("minValue:"+" "+min(a));

function maxPath(root){
    if(root === null) return !Infinity;
    if(root.left === null && root.right === null) return root.val;
    return root.val+Math.max(maxPath(root.left),maxPath(root.right));
}

console.log("maxPath:"+" "+maxPath(a));