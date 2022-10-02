//[1.] // find the max sub array using kadanes algorithm

/* function maxSubarray(a, n) {
    let max = -Number.MAX_VALUE, i, prev = 0;

    for (i = 0; i < n; i++) {
        prev = Math.max(prev + a[i], a[i]);
        max = Math.max(prev, max);
    }

    return max;
}

let a = [2, 1, -3, 4, 2, -5];
let n = a.length;

console.log(maxSubarray(a, n)); */

//[2.] // find the missing number from an array having values in between of 0 and n, where n is the length of that array

/* function find(a, n) {
    let total = (n * (n + 1)) / 2;
    let sum = 0, i;
    for (i = 0; i < n; i++) {
        sum += a[i];
    }

    return total - sum;
}

let a = [0, 2, 1, 3, 5];
let n = a.length;

console.log(find(a, n)); */

//[3.] // return true if any element appears at least twice in that array (Contains Duplicate) and false if every element is distinct

/* function findDuplicates(a, n) {
    let s = new Set(a);

    return n - s.size !== 0;
}

let a = [1, 2, 2, 4, 5];
let n = a.length;

console.log(findDuplicates(a, n)); */

//[4.] // distribution problem -> given an array in which values of that array represents the number of chocolates in a packet, there are m numbers of students, the task is to distribute chocolate packets such that the differnce between the max and min chocolates given to the students is minimium.

/* function distribute(a, m, n) {
    if (m == 0 || n == 0) {
        return 0;
    }

    a.sort((a, b) => a - b);

    if (n < m) {
        return -1;
    }

    let min_diff = Number.MAX_VALUE;

    for (let i = 0; i + m - 1 < n; i++) {
        let diff = a[i + m - 1] - a[i];

        if (diff < min_diff) {
            min_diff = diff;
        }
    }

    return min_diff;
}

let a = [2, 4, 5, 1, 3];
let n = a.length;
let m = 3;

console.log(distribute(a, m, n)); */

//[5.] // write a program to reverse an array or string

/* function reverse(a, start, end) {
    if (start >= end) {
        return
    }

    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;

    // recursive function calling
    reverse(a, start + 1, end - 1);
}

let a = [2, 4, 5, 1, 3];
let n = a.length;

reverse(a, 0, n - 1)
console.log(a); */

//[6.] // max and min of an array

/* function minMax(a, n) {
    let mn, mx, i;

    if (n % 2 == 0) {
        mx = Math.max(a[0], a[1]);
        mn = Math.min(a[0], a[1]);

        i = 2;
    }
    else {
        mx = mn = a[0];
        i = 1;
    }

    while (i < n - 1) {
        if (a[i] < a[i + 1]) {
            mx = Math.max(mx, a[i + 1]);
            mn = Math.min(mn, a[i]);
        }
        else {
            mx = Math.max(mx, a[i]);
            mn = Math.min(mn, a[i + 1]);
        }

        i += 2;
    }

    return [mn, mx]
}

let a = [10, 2, 3, 12, 55, 1];
let n = a.length;

console.log("max: " + minMax(a, n)[0] + " " + "min: " + minMax(a, n)[1]); */