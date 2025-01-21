
//global scope

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30

/******************/
// if (true) {
//     //block scope
//     let a = 10;
//     const b = 20;
//     var c = 30;

// }

// console.log(a);    //error(a not defined)

// console.log(b);   //error(b is not defined)
// console.log(c);  //30

/********************/

// let a = 10;
// if (true) {
//     let a = 30;
//     console.log(a);  //30

// }
// console.log(a);  //10

// const b = 20;
// if (true) {
//     const b = 50;
//     console.log(b);  //50

// }
// console.log(b);  //20

// var c = 40;
// if (true) {
//     var c = 100;
//     console.log(c);   //100

// }
// console.log(c);   //100

/**********************/
//nested scope

function one() {
    const username = "sutun"
    function two() {
        const website = "youtube"
        console.log(username);  //sutun

    }
    // console.log(website);  //error

    two();
}
// one();

/***********************/

if (true) {
    const username = "sutun"
    if (username == "sutun") {
        const website = " youtube";
        // console.log(username + website);  //sutun youtube

    }
    // console.log(website);   //error(website is not defined)

}
// console.log(username);   //error(username is not defined)

/***************** interesting *****************/

//function declaration

console.log(addOne(5));   //6

function addOne(num) {
    return num + 1;
}


//function expression

//addTwo(5);   //error ( Cannot access 'addTwo' before initialization)
const addTwo=function(num)
{
    return num+2;
}
console.log(addTwo(5));  //7