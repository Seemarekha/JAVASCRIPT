
/******************** Part-1 *************/

// singleton

// object literals


// const mySymbol = Symbol("key1");


// const jsUser = {
//     name: "Sutun",
//     "full name": "Seemarekha Behera",
//     [mySymbol]: "mykey1",
//     age: 23,
//     location: "Banglore",
//     email: "sutun@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(jsUser.email);  //sutun@gmail.com
// console.log(jsUser["email"]);   //sutun@gmail.com

// console.log(jsUser["full name"]);  //Seemarekha Behera
// // console.log(jsUser"full name");  //error
// console.log(jsUser[mySymbol]);  //mykey1
// console.log(typeof mySymbol);  //symbol

// jsUser.email = "sutun@chatgpt.com";
// Object.freeze(jsUser);  //lock the object
// jsUser.email = "sutun@microsoft.com";
// console.log(jsUser.email);   //sutun@chatgpt.com



// jsUser.greeting = function () {
//     console.log("Hello JS user");
// }
// console.log(jsUser.greeting);  //[Function (anonymous)]
// console.log(jsUser.greeting());    //Hello JS user

// jsUser.greetingTwo = function () {
//     console.log(`Hello JS user,${this.name}`);
// }
// console.log(jsUser.greetingTwo());    //Hello JS user,Sutun



/********************** Part-2 ***************/
//non-singleton


const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);   //{ id: 'abc123', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email: "bapi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sameendra",
            lastname: "Behera"
        }
    }
}

// console.log(regularUser.fullname);   //{ userfullname: { firstname: 'Sameendra', lastname: 'Behera' } }
// console.log(regularUser.fullname.userfullname);  //{ firstname: 'Sameendra', lastname: 'Behera' }
// console.log(regularUser.fullname.userfullname.firstname);   //Sameendra


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3={...obj1,...obj2};
// console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = { 5: "a", 6: "b" };

const obj5 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj5);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    }
]

// console.log(users[1].email);  //b@gmail.com

// console.log(tinderUser);  //{ id: 'abc123', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));   //[ 'abc123', 'Sammy', false ]
// console.log(Object.entries(tinderUser));   //[ [ 'id', 'abc123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //true
// console.log(tinderUser.hasOwnProperty("isLogged"));   //false



const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Kishore"
}

const { courseInstructor } = course;
console.log(courseInstructor);    //Kishore

const { courseInstructor: instructor } = course;
console.log(instructor);     //Kishore

