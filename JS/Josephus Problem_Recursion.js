function numWays(n, m) {
    if (n == 1 || m == 1) return 1;

    return numWays(n - 1, m) + numWays(n, m - 1);
}
console.log(numWays(3, 3));

function josephusProblem(n, k) {
    if (n == 1) return 0;
    return (josephusProblem(n - 1, k) + k) % n;

}
console.log("Last person: " + josephusProblem(5, 3));