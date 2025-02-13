class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);

    }
}


const user1 = new Teacher("Bapi", "bapi@gmail.com", "123");
user1.addCourse();

const user2=new User("sutun");
user2.logMe();
// user2.addCourse();   // can't access child class properties

console.log(user1===user2);  //false

console.log(user1 instanceof Teacher);  //true
console.log(user1 instanceof User);  //true

console.log(user2 instanceof Teacher);  //false
console.log(user2 instanceof User);  //true


