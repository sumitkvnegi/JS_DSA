/* two sum
function twoSum(a,target){
const map={};
for(let i=0; i<a.length; i++){
    const another = target-a[i];
    if(another in map){
        return [map[another],i];
    }
    map[a[i]]=i;
}
return null;
}
const a=[2,7,4,5,3];
const t=9;
console.log(twoSum(a,t)); */

// two sum - input array is sorted
/* function twoSum(a, t) {
    let l = a.length, i = 0, j = l - 1;
    let sum = a[i] + a[j];
    while (sum !== t) {
        sum < t ? i++ : j--;
        sum = a[i] + a[j];
    }
    return [i, j];
}
const a = [2, 7, 8, 9];
const t = 9;
console.log(twoSum(a, t)); */

//[1.] // 3Sum
/* function sum(a, n) {
    const results = [];
    if (n < 3) return results;

    a = a.sort((a, b) => a - b);

    let target = 0;

    for (let i = 0; i < n - 2; i++) {
        if (a[i] > target) break;
        if (i > 0 && a[i] === a[i - 1]) continue;
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = a[i] + a[j] + a[k];
            if (sum === target) {
                results.push(a[i], a[j], a[k]);
                while (a[j] === a[j + 1]) j++;
                while (a[k] === a[k - 1]) k--;
                j++;
                k--;
            } else if (sum < target) {
                j++
            } else {
                k--;
            }
        }
    }
    return results;
}

const a = [-1, 0, 1, 2, -1, -4];
const n = a.length;

console.log(sum(a, n)); */

//[2.] // Container with most water
/* function container(a,n){

}

const height=[1,8,6,2,5,4,8,3,7];
const n=height.length;

console.log(container(height,n)); */

//[3.] // Given an array a[] and a n integer k, where k is smaller than size of array, the task is to find the kth smallest element in the given array. it is given that all array elements are distinct. a[7,10,4,3,20,15] k=3 -> 7
function partition(a, low, high) {
    let pivot = a[high], pivotloc = low;
    for (let i = low; i < high; i++) {
        if (a[i] < pivot) {
            let temp = a[i];
            a[i] = a[pivotloc];
            a[pivotloc] = temp;
            pivotloc++;
        }
    }

    let temp = a[high];
    a[high] = a[pivotloc];
    a[pivotloc] = temp;

    return pivotloc;
}

function kth(a, low, high, k) {
    let pivot = partition(a, low, high);
    if (pivot == k - 1) return a[pivot];
    else if (pivot < k - 1) return kth(a, pivot + 1, high, k);
    else return kth(a, low, pivot - 1, k);
}
const a = [7, 10, 4, 3, 20, 15];
const k = 3;
const n = a.length;
let low = 0, high = n - 1;

console.log(kth(a, low, high, k));
