//this keyword -> refers to current context

// const user = {
//     username: "sutun",
//     price: 999,
//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to website`); 
//         console.log(this);  //{ username: 'sutun', price: 999, welcomeMessage: [Function: welcomeMessage]  }
//     }
// }
// user.welcomeMessage();    //sutun, welcome to website
// user.username="sam";
// user.welcomeMessage();    //sam, welcome to website

// console.log(this);     //   { username: 'sam', price: 999,  welcomeMessage: [Function: welcomeMessage]  }

/*******************************/

// function one() {
//     let username = "sutun"
//     console.log(this.username);   //undefined

// }
// one();

/******************************/

// const two = function () {
//     let username = "sutun"
//     console.log(this.username);   //undefined
// }
// two();

/*****************************/

// const three = () => {
//     let username = "sutun"
//     console.log(this.username);     //undefined

// }
// three();

/*****************************/

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(4, 7));   //11

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// OR
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(4, 7));   //11

// const addTwo = (num1, num2) => {username:"sutun"};
// console.log(addTwo(4, 7));  //undefined

// const addTwo = (num1, num2) => ({username:"sutun"});
// console.log(addTwo(4, 7));   //{ username: 'sutun' }


