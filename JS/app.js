// function sumArr1(arr1) {
//     let sum1 = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum1 += arr1[i];
//     }
//     return sum1;
// }
// function sumArr2(arr2) {
//     let l = arr2.length;
//     let sum2 = 0;
//     for (let i = 0; i < l; i++) {
//         sum2 += arr2[i];
//     }
//     return sum2;
// }
// function sumArr3(arr3) {
//     return (arr3.length === 0) ? 0 : arr3[0] + sumArr3(arr3.slice(1));
// }

// let arr1 = [4, 2, 3, 1, 8];
// let arr2 = [4, 2, 3, 1, 8];
// let arr3 = [4, 2, 3, 1, 8];


// console.time();
// console.log(sumArr1(arr1));
// console.timeEnd();

// console.time();
// console.log(sumArr2(arr2));
// console.timeEnd();

// console.time();
// console.log(sumArr3(arr3));
// console.timeEnd();

// function sum(n) {
//     return (n * (n + 1)) / 2;
// }
// function sum2(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// let t1, t2;

// t1 = Date.now();
// console.log(sum(100));
// t2 = Date.now();
// console.log(`${(t2 - t1) / 1000} seconds`);

// t1 = Date.now();
// console.log(sum2(100));
// t2 = Date.now();
// console.log(`${(t2 - t1) / 1000} seconds`);


// lograthmic time complexity cmd