const combination = (elements) => {
    if (elements.length === 0) return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1);
    const combsWithoutFirst = combination(rest);
    const combsWithFirst = [];

    combsWithoutFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst);
    })

    return [...combsWithoutFirst, ...combsWithFirst]
};

console.log(combination(['a', 'b', 'c']));
console.log("\n\n\n\n");
console.log(combination(['a', 'b']));
console.log("\n\n\n\n");

// time complexity : O(2^n)
// space complexity : O(n^2)