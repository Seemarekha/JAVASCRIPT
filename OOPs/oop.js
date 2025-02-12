const user = {
    username: "sutun",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);    // this keyword is used for current context
        console.log(this);
        
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

