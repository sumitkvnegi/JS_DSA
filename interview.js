/* const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];
// find intersection 
const intersect = arr1.filter((i)=>{
    return arr2.includes(i);
})
console.log(intersect);

// find union
const union = [...new Set([...arr1,...arr2])];
console.log(union); */

/* let str = "the day he finds out that the person is not there";
console.log(str.replace(/the /g,"a "));
console.log(str.replaceAll("the ","a ")); */

/* const logNum = () =>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
    },1000);
    setTimeout(()=>{
        console.log(3);
    },0);
    console.log(4);
}
logNum(); */

/* console.log(400.4 === 200.2 * 2);
// console.log(200.2 * 2);
// console.log(300.3 * 3);
console.log(900.9 === 300.3 * 3) // error due to base2 and base10 difference
console.log(900.9 === (300.3 * 10 * 3)/10) */ 

/* 
console.log(1/2);
console.log(1/3);
*/

/* console.log(typeof {});
console.log(typeof []);
console.log(Array.isArray([]));
console.log([] instanceof Array); */

/* let myName = "kv";
let alice = myName; // pass by value

myName = "Mr.D";
console.log(alice);

const obj1 = {
    id:1,
    name:"james",
};

const obj2 = obj1; // pass by refrence
obj2.name = "bond";
console.log(obj1); */

/* let arrName = [
    {
        name:"kv"
    },
    {
        name:"sumit"
    }
];

console.log(arrName.indexOf({
    name:"sumit" // two objects are not same 
}));
// console.log(arrName[0])
// console.log(arrName[1])
*/

// primitive data type pass by value
// non-primitive data type pass by reference

/* // difference in == and ===
 console.log(1=="1");
// == check only values (auto coversion string to number), === also check datatypes */

/* var gender = "male";
const func = () => {
    console.log(gender); // undefined due to hoisting
    var gender = "female";
    return gender;
}
console.log(func());
*/

/* const a1 = [1,2,3];
const a2 = [3,1,2];

console.log(a1.every((i)=>{
    if(a2.indexOf(i) > -1){
        return (i=a2[a2.indexOf(i)]);
    };
}));
*/