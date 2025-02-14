const user = {
    _email: 'sutun@gmail.com',
    _password: 'xyz@123',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const user1=Object.create(user);
console.log(user1.email);

