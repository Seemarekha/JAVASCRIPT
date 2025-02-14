class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    set password(pwd) {
        this._password = pwd;
    }

    get password() {
        return `${this._password}#sutun`;
    }

    set email(value){
        this._email=value;
    }
    get email(){
        return this._email.toUpperCase();
    }
}

const user1 = new User("sutun@gmail.com", "abc");
console.log(user1.password);
console.log(user1.email);

