//[1.] // Search in rotated sorted array ( there is an integer array nums sorted in ascending order - with distinct values) a[0,1,2,4,5,6,7]->a[4,5,6,7,0,1,2]

// use modified binary search for O(logn)

/* function search(a, n, k) {
    let low = 0, high = n - 1;

    while (low <= high) {
        let mid = (low + high) / 2;

        if (a[mid] == k) return mid;

        if (a[low] < a[mid]) {
            if (k >= a[low] && k < a[mid]) { high = mid - 1; }
            else { low = mid + 1; }
        } else {
            if (k <= a[high] && k > a[mid]) { low = mid + 1; }
            else { high = mid - 1; }
        }
    }
}

let a = [4, 5, 6, 7, 0, 1, 2];
let n = a.length, k = 5;

console.log(search(a, n, k)); */

//[2.] // Next Permutation a[1,2]->( a[1,2], a[2,1] )

/* function nextPer(a, n) {
    let i, j;
    for (i = n - 2; i >= 0; i--) {
        if (a[i] < a[i + 1]) {
            break;
        }
    }
    if (i < 0) {
        a.reverse();
    }
    else {
        for (j = n - 1; j > i; j--) {
            if (a[j] > a[i]) {
                break;
            }
        }
        [a[i], a[j]] = [a[j], a[i]];
        reverse()
    }



    // for ascending
    function reverse(i) {
        let start = i + 1, end = n - 1;

        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    return a;

}

let a = [1, 3, 4, 2, 3, 4];
let n = a.length;

console.log(nextPer(a, n)); */

//[3.] // Repeat and missing number array (an array of n integers from 1 to n. each integer appears exactly once except A which appears twice and B which is missing, Return A and B -> [A, B])

/* function missing(a, n) {
    a.sort();
    let r, m;
    for (let i = 1; i < n; i++) {
        if (a[i - 1] != i) {
            r = a[i - 1];
            m = i;
        }
    }
    return [r, m];
}

let a = [3, 1, 2, 5, 3]; // here 4 is missing and 3 is repeated
let n = a.length;
console.log(missing(a, n)); */

//[4.] // Best time to buy and sell stock

/* function buySell(a, n) {
    let max = 0, left = 0, right = 1;
    while (right < n) {
        if (a[left] < a[right]) {
            let profit = a[right] - a[left];
            max = Math.max(max, profit);
        } else {
            left = right;
        }
        right++;
    }

    return max;
}

let a = [7, 2, 5, 3, 4, 1, 10];
let n = a.length;

console.log(buySell(a, n));
 */
//[5.] // Kth largest element in an array

// using quick select

/* function klargest(a, n, k) {
    const finalIdx = n - k;
    let left = 0, right = n - 1;
    while (left <= right) {
        // random num between left and right
        const pivot = Math.floor(Math.random() * (right - left + 1) + left);
        // final position of the pivot in a sorted array
        const pivotIdx = pivotHelper(pivot, left, right);
        //the atrget number is in its correct position, thus return
        if (pivotIdx === finalIdx) return a[finalIdx]

        // if pivotIdx is smaller we undershot, so look only on the right half
        if (pivotIdx < finalIdx) left = pivotIdx + 1;
        // else we overshot, so lookonly on the left half
        else right = pivotIdx - 1;
    }
    function pivotHelper(pivot, start, end) {
        // move the pivot to the end (get it out of way)
        swap(pivot, end);

        let i = start, j = start;

        // move smaller nums to the begining of the array
        while (j < end) {
            if (a[j] <= a[end]) {
                swap(i, j);
                i++;
            }
            j++;
        }
        // swap pivot to its final position
        swap(i, end);
        return i;
    }
    function swap(i, j) {
        [a[i], a[j]] = [a[j], a[i]];
    }
}

let a = [1, 5, 2, 3, 6];
let n = a.length;
let k = 2;

console.log(klargest(a, n, k)); */