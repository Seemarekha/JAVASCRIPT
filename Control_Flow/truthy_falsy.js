const userEmail = [];

// if (userEmail) {
//     console.log("Got user email");

// } else {
//     console.log("Don't have user email");

// }

/************** falsy values *****************/

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/*************** truthy values **************/

// "0", 'false', " ", [], {}, function () { }

/**************************************/

// if (userEmail.length === 0) {
//     console.log("Array is empty");   //Array is empty

// }

/**************************************/

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");      // Object is empty

// }


/**************************************/

// false == 0   -> true
// false == ''  -> true
// 0 == ''      -> true

/*************************************/

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// console.log(val1); //5

// let val2;
// val2 = null ?? 10;
// console.log(val2);  //10

// let val3;
// val3 = undefined ?? 15;
// console.log(val3);  //15

// let val4;
// val4 = null ?? 10 ?? 20; 
// console.log(val4);  //10

/****************** Ternary Operator ***************/

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");   //more than 80
;


