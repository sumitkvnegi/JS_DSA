//[1.] // Product of an array except self a[1,2,3,4]->a[24,12,8,6]
/* function product(a, n) {
    let a2 = [];
    let leftMult = 1, rightMult = 1;
    for (let i = n - 1; i >= 0; i--) {
        a2[i] = rightMult;
        rightMult *= a[i];
    }
    for (let i = 0; i < n; i++) {
        a2[i] *= leftMult;
        leftMult *= a[i];
    }

    return a2;
}

let a = [1, 2, 3, 4];
let n = a.length;
console.log(a);
console.log(product(a, n)); */

//[2.] // Maximum Product Subarray a[2,3,-2,4] -> 6

/* function maxProduct(a, n) {
    let prevMax = prevMin = max = a[0];
    for (let i = 1; i < n; i++) {
        const options = [a[i], a[i] * prevMax, a[i] * prevMin];

        prevMax = Math.max(...options);
        prevMin = Math.min(...options);

        max = Math.max(prevMax, max);
    }
    return max;
}

let a = [2, 3, -2, 4];
let n = a.length;
console.log(maxProduct(a, n));

 */

//[3.] // Find minimum in rotated sorted array a[3,4,5,1,2] -> 1

/* function min(a, n) {
    let low = 0, high = n - 1;
    while (low <= high) {
        if (low === high) return a[low];
        let mid = Math.floor((low + high) / 2);
        if (a[mid] < a[mid - 1] && a[mid] < a[mid + 1]) return a[mid];

        if (a[low] < a[high]) {
            high = mid - 1;
        } else if (a[high] < a[low]) {
            low = mid + 1;
        }
    }
}

let a = [4, 5, 6, 7, 0, 1, 2];
let n = a.length;
console.log(min(a, n)); */

//[4.] // Find if there is a pair with a given sum in the rotated sorted array
// a[11,15,6,8,9,10] given sum=16 -> true (6,10) ... return true if there is any pair or else return false
// using meet in the middle algorithm
/* function find(a, n, x) {
    let i;
    for (i = 0; i < n; i++) {
        if (a[i] > a[i + 1]) break;
    }
    let l = (i + 1) % n;
    let r = i;

    while (l != r) {
        if (a[l] + a[r] == x) return true;
        if (a[l] + a[r] < x) {
            l = (l + 1) % n;
        } else {
            r = (n + r - 1) % n;
        }
    }
    return false;
}

let a = [11, 15, 6, 8, 9, 10];
let n = a.length;
let x = 16;
console.log(find(a, n, x));
 */