//if
// <, >, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn = true;
// const temperature = 51;

// if (temperature < 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

/**************************/

// const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`User power : ${power}`);   //User power : fly

// }
// console.log(`User power : ${power}`);   //error (power is not defined)

/***************************/

//implicit scope (because of sinle statement, No need to use {})
// const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");  // less than 1200

// }

/****************************/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");

}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");

}
