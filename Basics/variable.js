const accountId = 54321;
let accountEmail = "sutun13@gmail.com";
var accountPassword = "123";
accountCity = "Banglore";
let accountState;

//accountId=2;  //Not allowed

accountEmail = "sut@t.com";
accountPassword = "456";
accountCity = "Jaipur";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
Prefer not to use "var"
Because of issue in block scope and functional scope
*/