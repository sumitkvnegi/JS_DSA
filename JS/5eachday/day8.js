//[1.] // Remove consecutive characters aabaa->aba
// function removeDuplicates(s) {
//     let m = new Map();
//     let a = [];
//     for (let i = 0; i < s.length; i++) {
//         if (!(s[i] === s[i + 1])) {
//             a.push(s[i]);
//         }
//     }
//     return a.join("");
// }

// let s = "aabbac";
// console.log(removeDuplicates(s));

//[2.] // Largest common prefix a['flower','flow','flight'] -> fl
/* function common(a) {
    return a.reduce((prev, next) => {
        let i = 0;
        while (prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
}

let a = ['flower', 'flow', 'flight'];
console.log(common(a)); */

//[3.] // Convert a sentence into its equivalent mobile numeric keypad sequence
/* function convert(n, i) {
    let s = "";
    for (let m = 0; m < i.length; m++) {
        for (let j = 0; j < n.length; j++) {
            for (let k = 0; k < n[j].length; k++) {
                if (i[m] === n[j][k]) {
                    let tem = k + 1;
                    while (tem) {
                        s += (j + 1);
                        tem--;
                    }
                }
            }
        }
    }
    return s;
}

let num = [1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz', '*', 0, '#'];
let input = 'GEEKSFORGEEKS';
console.log(convert(num, input.toLowerCase()));
 */
// Second Method
/* function printSequence(a, input) {
    let output = '', n = input.length;

    for (let i = 0; i < n; i++) {
        //checking for space
        if (input[i] == ' ') output = output + "0".charCodeAt(0);
        else {
            //Calculating index for each character
            let position = input[i].charCodeAt(0) - 'A'.charCodeAt(0);
            output = output + a[position];
        }
    }
    return output;
}

let str = ["2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66", "666", "7", "77", "777", "7777", "8", "88", "888", "9", "99", "999", "9999"];
let input = 'GEEKSFORGEEKS';
console.log(printSequence(str, input));
 */

//[4.] // Print all the duplicates in the input string "test string"-> s=2,t=3
/* function duplicateChar(s) {
    let count = new Map();
    for (let i = 0; i < s.length; i++) {
        if (count.has(s[i])) {
            count.set(s[i], count.get(s[i]) + 1);
        } else {
            count.set(s[i], 1);
        }
    }
    for (const [key, val] of count) {
        if (val > 1) {
            console.log(key + ": " + val);
        }
    }
}

let s = "test string";
duplicateChar(s); */

//[5.] // Longest substring without repeating characters
/* function lengthOfLongest(s) {
    const map = {};
    let left = 0;

    return s.split('').reduce((max, v, i) => {
        console.log(max + " " + v + " " + i + " ");
        left = map[v] >= left ? map[v] + 1 : left;
        console.log("map[v]: " + map[v])
        console.log("left: " + left)
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

let s = "abcabcbb";
console.log(lengthOfLongest(s)); */