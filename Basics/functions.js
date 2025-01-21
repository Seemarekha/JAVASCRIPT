
function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("T");
    console.log("U");
    console.log("N");

}
// sayMyName();


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);

// }
// addTwoNumbers(1,2);  //3
// addTwoNumbers();  //NaN
// addTwoNumbers(3,"5"); //35
// addTwoNumbers(3);  //NaN
// addTwoNumbers(3,null);  //3
// addTwoNumbers(3,"a")  //3a


//const res=addTwoNumbers(3,5);  //8

function addTwoNumbers(num1, num2) {
    let res = num1 + num2;
    return res;
    //       console.log("Sutun");  //unreachable statement
}

// const reault = addTwoNumbers(3, 5);
// console.log("Result : ", reault);    //Result :  8


// function loginUserMsg(username) {

//     if (!username) {
//         console.log("Please enter a username");
//         return;

//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMsg("sutun"));  //sutun just logged in

// console.log(loginUserMsg());   //please enter a username   undefined



// assign default value
// function loginUserMsg(username = "sam") {

//     if (!username) {
//         console.log("Please enter a username");
//         return;

//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMsg());   //sam just logged in
// console.log(loginUserMsg("sutun"));   //sutun just logged in


//rest operator

// function calculateCartPrice(...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(10));  //[ 10 ]
// console.log(calculateCartPrice(10,20,30));  //[ 10, 20, 30 ]

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(100, 200, 300, 400, 5000));   //[ 300, 400, 5000 ]


const user = {
    username: "sutun",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user);   //Username is sutun and price is 199

// handleObject({
//     username: "sam",
//     price: 499
// });                      //Username is sam and price is 499

const myArr = [200, 300, 100, 400];

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myArr));   //300
console.log(returnSecondValue([200, 500, 600, 800]));   //500
