// Bit Manipulation
// & and operator
// | or operator
// ^ xor operator
// ~ not operator
// << zero fill left shift operator
// >> signed right shift operator
// >>> zero fill right shift operator

// Convert decimal to binary
/* function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
console.log(dec2bin(-5));
 */
// Convert binary to decimal
/* function bin2dec(bin) {
    return parseInt(bin, 2);
}
console.log(bin2dec(101)); */

// Using right shift
/* let decimal = 1200;
let binary = "";
while (decimal > 0) {
    if (decimal & 1) binary = "1" + binary;
    else binary = "0" + binary;
    decimal = decimal >> 1;
}
console.log(binary); */

// Using the modulo operator
/* let decimal = 2;
let binary = "";
while (decimal > 0) {
    if (decimal % 2 == 1) binary = "1" + binary;
    else binary = "0" + binary;
    decimal = Math.floor(decimal / 2);
}
console.log(binary); */

// Power of 2
/* function powerOfTwo(n) {
    return (n && !(n & (n - 1)));
}
let n = 3;
console.log(powerOfTwo(n)); */

//[1.] // counting number of ones in binary representation of a number
/* function hammingWeight(n) {
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++
    }
    return count;
}
let n = 10;
console.log(hammingWeight(n)); */

//[2.] // Non repeating numbers
/* function nonRepeatingNum(a) {
    let temp = 0;
    let x = 0, y = 0;
    for (let i = 0; i < a.length; i++) {
        temp ^= a[i];
    }
    let setbit = temp & (~temp + 1); // rightmost setbit
    console.log(setbit);
    for (let i = 0; i < a.length; i++) {
        if (a[i] & setbit > 0) {
            x = x ^ a[i] //1 2 3
            console.log(x)
        } else {
            y = y ^ a[i] //2 0 4
            console.log(y)
        }
    }

    return [x, y];
}
let arr = [1, 2, 3, 2, 1, 4];
console.log(nonRepeatingNum(arr)) */