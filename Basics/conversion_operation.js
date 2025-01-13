let score = "33";

console.log(typeof score); //string
console.log(typeof score); //string

let scoreInNumber = Number(score);
console.log(scoreInNumber); //33

console.log(typeof scoreInNumber); //number

/************************************/

let id = "45rt";

console.log(typeof id); //string

let idInNumber = Number(id);
console.log(typeof idInNumber); //number
console.log(idInNumber); //NaN
console.log(typeof NaN); //number

/************************************/

let value = null;
console.log(typeof value); //object

let valueInNumber = Number(value);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //0

/************************************/

let isValid = true;
console.log(typeof isValid); //boolean

let isValidInNumber = Number(isValid);
console.log(typeof isValidInNumber); //number
console.log(isValidInNumber); //1

/************************************/

let rate = undefined;
console.log(typeof rate); //undefined

let rateInNumber = Number(rate);
console.log(typeof rateInNumber);  //number
console.log(rateInNumber);  //NaN

/************************************/

let isLoggedIn = 1;

let isLoggedInBoolean = Boolean(isLoggedIn);
console.log(isLoggedInBoolean);  //true


/************************************/

let sNum = 33;
let stringNumber = String(sNum);
console.log(stringNumber); // 33
console.log(typeof stringNumber);  //string

/************************************/

// "33" => 33
// "33abc" => NaN
// true =>1; false=>0;
// 1 => true; 0 => false;
// "" => false
// "sutun" => true



/******************Operations*********************/

console.log("********************");

let a = 10;
let neg_a = -a;
console.log(neg_a);  //-10

// console.log(10 + 2);  //12
// console.log(2 - 8);   //-6
// console.log(2 * 2);   //4
// console.log(2 ** 3);  //8
// console.log(4 / 3);   //1.333333
// console.log(5 % 6);   //5

let str1 = "hello";
let str2 = " sutun!";
let str3 = str1 + str2;
console.log(str3);  //hello sutun!

// console.log("1" + 2);  //12
// console.log(1 + "2");  //12
// console.log("2"+5+8);  //258
// console.log(2+5+"8");  //78

// console.log(+true);  //1
// console.log(+"");  //0


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);  //101
++gameCounter;
console.log(gameCounter);  //102





