// GRAPH -> IS A COLLECTION OF NODES AND EDGES
// NODES -> DATA
// EDGES -> CONNECTIONS(REALTIONSHIPS BETWEEN NODES)

// ADJACENCY LIST
/* 
{
    A:[B,C],
    B:[D],
    C:[E],
    D:[],
    E:[B],
    F:[D]
}
*/

// DEPTH FIRST -> STACK
// BREADTH FIRST -> QUEUE

// DIRECTED GRAPH

/* const depthFirstPrint = (graph, source)=>{
    const stack = [source];

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}; */

/* const depthFirstPrint = (graph, source)=>{
    console.log(source);
    for(let neighbor of graph[source]){
        depthFirstPrint(graph, neighbor);
    }
}; */

/* const breadthFirstPrint = (graph, source)=>{
    const queue = [source];
    while(queue.length>0){
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}; */

/* const hasPath = (graph, src, dst)=>{
if(src===dst) return true;
for(let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dst)===true){
        return true;
    }
}
return false;
}; */

/* const hasPath2 = (graph, src, dst)=>{
    const queue = [src];
    while(queue.length>0){
        const current = queue.shift();
        if(current===dst) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}; */

/* const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}; */
// depthFirstPrint(graph, "a");
// breadthFirstPrint(graph, "a");
// console.log(hasPath(graph,"a","f")); // for acyclic graph //dfs approach
// console.log(hasPath2(graph,"a","f")); // for acyclic graph //bfs approach

// UNDIRECTED GRAPH

// edges:[
//     [i,j],[k,i],[m,k],[k,l],[o,n]
// ]

// const graph = {
//     i: ['j','k'],
//     j: ['i'],
//     k: ['i','m','l'],
//     m: ['k'],
//     l: ['k'],
//     o: ['n'],
//     n: ['o']
// };

const buildGraph = (edges)=>{
    const graph = {};
    for(let edge of edges){
        const [a,b] = edge;
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

const hasPath = (graph,src,dst,visited)=>{
    if(src===dst) return true;
    if(visited.has(src)) return false;
    visited.add(src);
    for(let neighbor of graph[src]){
        if(hasPath(graph,neighbor,dst, visited)===true){return true;};
    };
    return false;
};

const edges = [
     ['i','j'],['k','i'],['m','k'],['k','l'],['o','n']
]
const graph = buildGraph(edges);
console.log(graph);
console.log(hasPath(graph,'i','k',new Set()));