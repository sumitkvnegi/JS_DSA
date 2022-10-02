//[1.] //Merge Overlapping intervals
/* function merge(a){
    // a.sort((x,y)=>  x[0]-y[0]);
    let prev=a[0];
    let res=[prev];
    for(let curr of a){
        if(curr[0] <= prev[1]){
            prev[1] = Math.max(prev[1], curr[1])
        }else{
            res.push(curr);
            prev=curr;
        }
    }
    return res;
}

const a=[[1,3],[2,4],[6,8],[9,15],[11,18]];
console.log(merge(a)); */

//[2.] //space optimization using bit manipulation 
/* function checkbit(ar, i) {
    return ar[i >> 5] & (1 << (i & 31));
}
function setbit(a, i) {
    ar[i >> 5] |= (1 << (i & 31));
}
let a = 2, b = 10;
let size = Math.abs(b - a);
console.log(size);
size = Math.ceil(size / 32);
console.log(size);

let ar = new Array(size);

for (let i = a; i <= b; i++) {
    if (i % 2 == 0 | i % 5 == 0) {
        setbit(ar, i - a);
    }
}

for (let i = a; i <= b; i++) {
    if (checkbit(ar, i - a)) {
        console.log(i + " ");
    }
} */

//[3.] //subarray sum divisible k
/* function divByk(a, n, k) {
    let m = new Map();

    let max_len = 0;
    let curr_sum = 0;

    for (let i = 0; i < n; i++) {
        curr_sum += a[i];

        let mod = ((curr_sum % k) + k) % k;

        if (mod == 0) max_len = i + 1;
        else if (m.has(mod) == false) m.set(mod, i);
        else if (max_len < (i - m.get(mod))) max_len = i - m.get(mod);
    }
    return max_len;
}

let a = [2, 7, 6, 1, 4, 5];
let n = a.length;
let k = 3;

console.log(divByk(a, n, k)); */

//[4.] //find minimum number of merge operation to make an array palindrome

/* function palindrome(a, n) {
    let ans = 0;

    for (let i = 0, j = n - 1; i <= j;) {
        if (a[i] == a[j]) {
            i++;
            j--;
        }

        else if (a[i] > a[j]) {
            j--;
            a[j] += a[j + 1];
            ans++;
        }
        else {
            i++;
            a[i] += a[i - 1];
            ans++;
        }
    }

    return ans;
}

let a = [1, 4, 5, 9, 1];
let n = a.length;

console.log(palindrome(a, n)); */

//[5.] //given an array of numbers arrange the numbers to form the biggest number

function biggest(a, n) {
    a.sort((x, y) => {
        let xx = x, yy = y;
        let countx = 0, county = 0;
        while (x > 0) {
            countx++;
            x = Math.floor(x / 10);
        }
        while (y > 0) {
            county++;
            y = Math.floor(y / 10);
        }
        x = xx, y = yy;
        while (countx--) yy *= 10;
        while (county--) xx *= 10;
        yy += x;
        xx += y;
        return xx < yy;
    })

    let sum = "";
    for (let i = n - 1; i >= 0; i--) {
        sum += a[i];
    }
    return sum;
}

let a = [54, 546, 548, 60];
let n = a.length;
console.log(biggest(a, n));