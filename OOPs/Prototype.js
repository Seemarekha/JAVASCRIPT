// let myName="Sutun       ";

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);

    }
}

Object.prototype.sutun = function () {
    console.log(`sutun is present in all objects`);
}

Array.prototype.heySutun = function () {
    console.log(`Sutun says hello`);

}

// heroPower.sutun();
// myHeros.sutun();
// myHeros.heySutun();


// Inheritance

const User = {
    name: "sutun",
    email: "sutun@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "Nil         ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"sutun  ".trueLength();
"butun".trueLength();