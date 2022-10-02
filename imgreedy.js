// BULBS
// Given n bulbs, either on(1) or off(0).
// Turning on ith bulb causes all remaining bulbs on the right to flip.
// Find the min number of switches to turn all the bulbs on.
// [1,0,1] -> [1,1,0] -> [1,1,1] T:O(n*n) S:O(1)
// even flip remain same for right side bits 


function bulbs(){
    let cost = 0;
     for(let i of a){
        if(cost%2==0) i=i;
        else i=0;

        if(i%2==1) continue;
        else cost +=1;
     }
    return cost;
}
const a = [0,1,0]; 
console.log(bulbs(a));

// Highest product
// Given an array of N integers.
// Find the highest product by multiplying 3 elements.
// [1,2,3,4] -> 2*3*4 = 24


function highest(n){
    let s = n.sort((a,b)=> a-b);
    const max = Math.max(s[0]*s[1],s[s.length-2]*s[s.length-3])
    return max * s[s.length-1];
}
const n = [-5,-2,-1,0,0,1,1,5];
console.log(highest(n));

// Disjoint intervals
// Given a list intervals: [start, end]
// find the length of the maximal set of mutually disjoint intervals
// [[1,2],[2,10],[4,6]] -> 2
// [1,2] and [4,6]

function dijointinterval(i){
     i.sort((a,b)=> a[1]-b[1]);
    // [2,3],[1,4],[4,6],[1,9]

     let e1 = i[0][1]; // 3
     let count = 1;
     for(let j = 1; j<i.length; j++){
        let s2 = i[j][0];
        let e2 = i[j][1];

        if(s2>e1){
            count+=1;
            e1 = e2;
        }
     }
  return count;
}

const i = [[1,4],[2,3],[4,6],[1,9]];
console.log(dijointinterval(i));

// Largest Permutation
// Given an array A of random permutaion of numbers from 1 to N. Given B, the number of swaps in A that we can make.
// [1,3,2] ,number of swaps = 1 -> [3,1,2]

/* function largestPermutation(num,n,k){
 let o = {};
 let i = 0;
 while((k !== 0) && (i < n)){
    let j = 
 } 
}

const num = [1,3,2];
const swap = 2;

console.log(largestPermutation(num,num.length,swap)); */

// Permutation
// [0,1] -> [[0,1],[1,0]]

const permute = (nums) =>{
    const result = []; // global result

    // dfs recursive helper
    const dfs = (i, nums) => {
        // base case
        if(i === nums.length){
            result.push(nums.slice());
            return;
        }

        // dfs recursive case
        for(let j=i; j<nums.length; j++){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            dfs(i+1,nums);
            [nums[i],nums[j]]=[nums[j],nums[i]];
        }
    }
    dfs(0,nums);
    return result;
}
console.log("\n\n\n\n")
console.log(permute([1,2,3]));

/* 
1,2,3
1,2,3 2,1,3 2,3,1
*/