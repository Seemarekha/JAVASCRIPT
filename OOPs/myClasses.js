// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}@123`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new User("sutun", "sutun@gmail.com", "abc");
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}@123`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const user2 = new User("butun", "butun@gmail.com", "xyz");
console.log(user2.encryptPassword());
console.log(user2.changeUsername());


