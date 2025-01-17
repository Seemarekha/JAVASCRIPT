//Dates

// let myDate = new Date();

// console.log(myDate);   //2025-01-17T08:36:57.783Z
// console.log(myDate.toString()); //Fri Jan 17 2025 08:40:17 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Fri Jan 17 2025
// console.log(myDate.toISOString());  //2025-01-17T08:40:17.604Z
// console.log(myDate.toLocaleDateString());  //1/17/2025
// console.log(myDate.toJSON());  //2025-01-17T08:40:17.604Z
// console.log(myDate.toLocaleString());  //1/17/2025, 8:40:17 AM
// console.log(myDate.toLocaleTimeString());  //8:40:17 AM

// console.log(typeof myDate);  //object

// let myCreatedDate=new Date(2022,0,15);
// console.log(myCreatedDate.toDateString());  //Sat Jan 15 2022

// let myCreatedDate = new Date(2022, 0, 15, 8, 5);
// console.log(myCreatedDate.toLocaleString());  //1/15/2022, 8:05:00 AM

// let myCreatedDate=new Date("2022-01-15");   //"yy-mm-dd"
// console.log(myCreatedDate.toLocaleString());   //1/15/2022, 12:00:00 AM

// let myCreatedDate = new Date("01-15-2022");   //"mm-dd-yy"
// console.log(myCreatedDate.toLocaleString());  //1/15/2022, 12:00:00 AM


// let myTimeStamp = Date.now();

// console.log(myTimeStamp);   //1737103923540
// console.log(myCreatedDate.getTime());  //1642204800000
// console.log(Date.now());  //1737104013430


// console.log(Math.floor(Date.now() / 1000)); //1737104083


let newDate = new Date();

// console.log(newDate);  //2025-01-17T09:00:30.012Z
// console.log(newDate.getMonth() + 1);  //1
// console.log(newDate.getDay());  //5
// console.log(newDate.getFullYear());  //2025
// console.log(newDate.getHours());  //9
// console.log(newDate.getTime());  //1737104430012

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));               //Friday







