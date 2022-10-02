//[1.] // Longest Repeating Character Replacement
//[2.] // Group Anagrams
/* function anagrams(s) {
    let a = [], anagram = [];
    for (let i = 0; i < s.length; i++) {
        a.push(s[i].split("").sort().join(""));
    }
    let map = {};
    for (let i = 0; i < a.length; i++) {
        if (map[a[i]]) {
            map[a[i]] += `${i}`;
        } else {
            map[a[i]] = `${i}`;
        }
    }
    let i = Object.keys(map).length - 1;
    for (let key in map) {
        anagram[i] = map[key].split("").map((i) => s[i]);
        i--;
    }
    return anagram;
}
*/
/* function anagrams(str) {
    const map = {};
    for (let s of str) {
        const key = [...s].sort();
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(s);
    }
    return Object.values(map);
}
let str = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(anagrams(str));
 */
//[3.] // Longest Palindromic Substring
/* function palindrome(s) {
    let ll = 0, rr = 0, i, j;

    for (i = 0; i < s.length; i++) {
        for (j of [i, i + 1]) {
            console.log("j: " + j + " " + "i: " + i);
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
                [ll, rr] = (r - l + 1) > (rr - ll + 1) ? [l, r] : [ll, rr];
            }
        }
    }
    return s.substring(ll, rr + 1);
}
let s = "cbbd";
console.log(palindrome(s)); */

//[4.] // Transform one string to another using minimum number of given operation

/* function minOps(a, b) {
    let i, j, res = 0;
    // if (a.length != b.length) return -1;

    // let count = new Array(256);

    // for (i = 0; i < 256; i++) count[i] = 0;
    // for (i = 0; i < a.length; i++) {

    //     console.log("0++= " + count[a[i].charCodeAt(0)]++);
    //     console.log("0--= " + count[b[i].charCodeAt(0)]--);
    // }
    // for (i = 0; i < 256; i++) {
    //     if (count[i] != 0) return -1;
    // }

    i = a.length - 1;
    j = b.length - 1;

    while (i >= 0) {
        if (a[i] != b[j]) res++;
        else j--;
        i--;
    }

    return res;

}
let a = "eacbd";
let b = "eabcd";
console.log(minOps(a, b)); */

//[5.] // Longest Prefix Suffix
