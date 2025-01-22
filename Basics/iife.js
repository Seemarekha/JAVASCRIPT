// Immediately Invoked Function Expressions (IIFE)

(function one() {
    // named IIFE
    console.log(`DB CONNECTED`);    //DB CONNECTED
})();     //; for ending or closing purpose

((name) => {
    // nameless IIFE
    console.log(`DB CONNECTED Two ${name}`);    //DB CONNECTED Two sutun

})("sutun")