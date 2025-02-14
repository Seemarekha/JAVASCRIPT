const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);



// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

const obj = {
    name: 'pen',
    price: 20,
    isAvailable: true,

    orderPen: function () {
        console.log("Not deliver");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
}
