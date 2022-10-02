// Graph = nodes + edges
// Directed and Undirected graph

// Directed Graph
// Adjacency List -> use to represent the graph
/* {
    a: [b, c],
    b: [d],
    c: [e],
    d: [],
    e: [b],
    f: [d]
} */

// DFS & BFS
// DFS => Stack
// BFS => Queue

// Iterative DFS
/* function depthFirstPrint(graph, source) {
    const stack = [source];
    while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr);
        for (let neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    }
} */

// Reccursive DFS
/* function depthFirstPrint(graph, source) {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrint(graph, neighbor);
    }
} */

// Iterative BFS
/* function breadthFirstPrint(graph, source) {
    const queue = [source];
    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr);
        for (let neighbor of graph[curr]) {
            queue.push(neighbor);
        }
    }
} */


/* const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
} */

/* depthFirstPrint(graph, 'a'); */
/* breadthFirstPrint(graph, 'a'); */

//[1.] // Hss path

/* function hasPath(graph, src, dst) {
    if (src === dst) return true;
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
} */

/* function hasPath(graph, src, dst) {
    const queue = [src];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr === dst) return true;
        for (let neighbor of graph[curr]) {
            queue.push(neighbor);
        }
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPath(graph, 'f', 'k')); */

// Undirected Graph Path
/* const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]
function buildGraph(edges) {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function hasPath(graph, src, dst, visted) {
    if (src === dst) return true;
    if (visted.has(src)) return false;
    visted.add(src);
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visted) === true) {
            return true;
        };
    }
    return false;
}

function undirectedPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
    console.log(graph);
    return hasPath(graph, nodeA, nodeB, new Set());
}
console.log(undirectedPath(edges, 'j', 'm'));
 */

// Connected Components Count

/* function explore(graph, curr, visited) {
    if (visited.has(String(curr))) {
        return false;
    }
    visited.add(String(curr));
    for (let neighbor of graph[curr]) {
        console.log(visited);
        if (explore(graph, neighbor, visited) === false) console.log("false");
    }
    return true;
}

function connectedComponentsCount(graph) {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            console.log("true");
            count += 1;
        }
    }
    return count;
}

console.log(connectedComponentsCount({
    0: [0, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}))
 */

// Largest Component
/* function exploreSize(graph, node, visited) {
    if (visited.has(node)) return 0;
    visited.add(node);
    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}
function largestComponent(graph) {
    const visited = new Set();
    let longest = 0;
    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > longest) longest = size;
    }
    console.log(longest);
}

largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
})
*/

// Sortest Path
/* function shortestPath(graph, start, end) {
    const visited = new Set([start]);
    const queue = [[start, 0]];
    while (queue.length > 0) {
        console.log(visited);
        const [node, distance] = queue.shift();
        if (node === end) return distance;
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

function buildGraph(edges) {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log(graph);
    return graph;
}

console.log(shortestPath(buildGraph(edges), 'w', 'z'));
*/

// Island Count

/* function explore(grid, r, c, visited) {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !colInBounds) return false;

    if (grid[r][c] === 'w') return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}

function islandCount(grid) {
    const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (explore(grid, r, c, visited) === true) count += 1;
        }
    }
    return count;
}

const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w']
]

console.log(islandCount(grid));
*/

//  Minimum Island Size

/* function exploreSize(grid, r, c, visited) {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !colInBounds) return 0;

    if (grid[r][c] === 'w') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);

    return size;
}

function minIslandSize(grid) {
    const visited = new Set();
    let min = Infinity;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            const size = exploreSize(grid, r, c, visited);
            if (size > 0 && size < min) {
                min = size;
            }
        }
    }
    return min;
}

const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w']
]

console.log(minIslandSize(grid));
 */






