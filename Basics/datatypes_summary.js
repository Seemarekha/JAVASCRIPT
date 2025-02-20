// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
console.log(typeof score);  //number

const scoreValue = 100.5;
console.log(typeof scoreValue);  //number


const isLoggedIn = false;
console.log(typeof isLoggedIn);  //boolean

const outsideTemp = null;
console.log(typeof outsideTemp);  //object

let userEmail;
console.log(typeof userEmail);  //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);  //false
console.log(typeof id);   //symbol

const bigNum = 8765423456709876543n;
console.log(typeof bigNum);   //bigint




//Reference type(Non-primitive type)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
console.log(typeof heros);  //object

let myObj = {
    name: "sutun",
    age: 22
}
console.log(typeof myObj);  //object

const myFunction = function () {
    console.log("Hello World!");

}
console.log(typeof myFunction);  //function



/*****************Memory Working***************************/

// Stack (Primitive)=> it gives copy
// Heap (Non-primitive)=> it gives reference

let myName = "sutun";
let otherName = myName;
console.log(otherName);  //sutun

otherName = "bapi";
console.log(otherName);  //bapi
console.log(myName);  //sutun

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;

userTwo.email = "sutun@gmail.com";

console.log(userOne.email);  //sutun@gmail.com
console.log(userTwo.email);  //sutun@gmail.com




