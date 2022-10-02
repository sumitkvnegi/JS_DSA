//[1.] // Print all possible combinations of r elements in a given array of size n
/* function combination(a, n, r, index, data, i) {
    let s = "";
    if (index == r) {
        for (let j = 0; j < r; j++) {
            s += data[j] + ",";
        }
        console.log("(" + s + ")");
        return;
    }
    if (i >= n) return;
    data[index] = a[i];
    combination(a, n, r, index + 1, data, i + 1);
    combination(a, n, r, index, data, i + 1);
}
function print(a, n, r) {
    let data = new Array(r);
    combination(a, n, r, 0, data, 0);
}

let a = [1, 2, 3];
let r = 2;
let n = a.length;
console.log(print(a, n, r)); */
//[2.] // Mo's algorithm ( Query Square Root Decomposition )

//[1.] // valid palindrome
/* function palindrome(str) {
    str = str.toLowerCase();
    s = str.replace(/[^A-Za-z0-9]/g, '');
    console.log(s);
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true
}
let s = "A man, a plan, a canal: Panama";
console.log(palindrome(s)); */

//[2.] // valid Anagaram
/* function anagaram(s, t) {
    if (s.length !== t.length) return false;
    return (s.split("").sort().join("")) === (t.split("").sort().join(""));
}

let s = "anagram", t = "nagaram";
console.log(anagaram(s, t)); */

//[3.] // valid parentheses
/* function parentheses() {
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            arr.push(s[i]);
        } else {
            if (arr[arr.length - 1] === map[s[i]]) {
                arr.pop();
            } else return false;
        }
    }
    return arr.length === 0;
}

let s = "()";
console.log(parentheses(s)); */