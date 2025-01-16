/***************** Numbers *************/

// const score=500;
// console.log(score);  //500

// const balance=new Number(100);
// console.log(balance);  //[Number: 100]

// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));  //100.00

// const otherNum=723.7957;
// console.log(otherNum.toPrecision(3));  //724
// console.log(otherNum.toPrecision(2));  //7.2e+2
// console.log(otherNum.toPrecision(4));  //723.8

// const hundreds=10000000;
// console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000




/****************** Maths ***************/

console.log(Math);

console.log(Math.abs(-7));  //7

console.log(Math.round(8.9));  //9
console.log(Math.ceil(7.3));  //8
console.log(Math.floor(4.8));  //4

console.log(Math.min(7, 1, 8, 3));  //1
console.log(Math.max(7, 1, 8, 3)); //8

console.log(Math.random());  //gives random values in decimal (e.g. 0.8736031782549418)
console.log((Math.random() * 10) + 1);//(e.g. 1.4239401152248412)
console.log(Math.floor(Math.random() * 10) + 1); //(e.g. 5)

const min = 10;
const max = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //(e.g. 47)

