// reduce()

const myNums = [1, 2, 3];

// const total = myNums.reduce(function (acc, curr) {
//     console.log(`acc : ${acc} and curr : ${curr}`);

//     return acc + curr;
// }, 0);
// console.log(`Total value : ${total}`);

/* output :
acc : 0 and curr : 1
acc : 1 and curr : 2
acc : 3 and curr : 3
Total value : 6
*/

// const total = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(`Total value : ${total}`);  //Total value : 6

/*****************************************/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }

];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);   //21997
