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

let isLoggedIn=1;

let isLoggedInBoolean=Boolean(isLoggedIn);
console.log(isLoggedInBoolean);  //true


/************************************/

let sNum=33;
let stringNumber=String(sNum);
console.log(stringNumber); // 33
console.log(typeof stringNumber);  //string

/************************************/

// "33" => 33
// "33abc" => NaN
// true =>1; false=>0;
// 1 => true; 0 => false;
// "" => false
// "sutun" => true


