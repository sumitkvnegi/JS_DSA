// Checking Sum Zero
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input
// [?, ?] -> output

// let getSumPairZero = (arr) => {
//     let str = "";
//     for (let num of arr) {
//         for (let j = 1; j < arr.length; j++) {
//             if ((num + arr[j]) === 0) {
//                 str += `[ ${num} , ${arr[j]} ]`;
//             }
//         }
//     }
//     return str;
// }
// console.log("\n\n");
// console.log("1.");
// console.log(getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
// console.log("\n\n");

/*-----------------------------------------------------------------------------*/

// let getSumPairZero2 = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]]
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// console.log("\n\n");
// console.log("1.");
// console.log(getSumPairZero2([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
// console.log("\n\n");
