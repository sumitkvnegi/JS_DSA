function mean(a, b) {
    let n = [...a, ...b], i, len = n.length;
    n.sort();
    return (len % 2) === 0 ? (n[(len / 2)] + n[(len / 2) - 1]) / 2 : n[Math.floor(len / 2)];
}

let n1 = [1, 2];
let n2 = [3, 4];

console.log(mean(n1, n2));