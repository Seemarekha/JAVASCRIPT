/*************** Array ***************/

// const myArr = [4, 6, 8, 2, 9];
// console.log(myArr);  //[ 4, 6, 8, 2, 9 ]
// console.log(myArr[0]);  //4

// const myHeroes = ["Shaktiman", "Harry Potter", "Spiderman", "Halkman"];
// console.log(myHeroes[1]);  //Harry Potter

// const myArr2 = new Array(4, 6, 7, 8);
// console.log(myArr2[2]);  //7

/**************** Array methods *************/

// myArr.push(6);
// myArr.push(7);
// console.log(myArr);  //[ 4, 6, 8, 2, 9, 6, 7 ]

// myArr.pop();
// console.log(myArr);   //[ 4, 6, 8, 2, 9, 6 ]

// myArr.unshift(10);   //Not optimized
// console.log(myArr);  // [ 10, 4, 6, 8, 2, 9 ]

// myArr.shift();
// console.log(myArr);    //[ 6, 8, 2, 9 ]

// console.log(myArr.includes(10));  //false
// console.log(myArr.indexOf(3));  //-1
// console.log(myArr.indexOf(9));   //4

// const newArr=myArr.join();
// console.log(myArr);  //[ 4, 6, 8, 2, 9 ]
// console.log(newArr);  //4,6,8,2,9

// console.log(typeof newArr);  //string




//slice, splice

// console.log("A ",myArr);  //A  [ 4, 6, 8, 2, 9 ]

// const myn1=myArr.slice(1,3);

// console.log("B ",myArr);  //B  [ 4, 6, 8, 2, 9 ]
// console.log(myn1);  //[ 6, 8 ]

// const myn2=myArr.splice(1,3);

// console.log("C ",myArr);  //C  [ 4, 9 ]
// console.log(myn2);  //[ 6, 8, 2 ]



// const marvel_heros = ["Thor", "Ironman", "Spiderman"];
// const dc_heros = ["Superman", "Flash", "Batman"];

// console.log(marvel_heros);  //[ 'Thor', 'Ironman', 'Spiderman' ]
// console.log(dc_heros);   //[ 'Superman', 'Flash', 'Batman' ]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);   //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][2]);  //Batman

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);   //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// const all_new_heros=[...marvel_heros,...dc_heros];
// console.log(all_new_heros);   //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]




// const arr = [1, 2, 3, 4, [6, 8, 9], 5, 7, [3, 4, 5, [8, 9]]];
// console.log(arr);     //[ 1, 2, 3, 4, [ 6, 8, 9 ], 5, 7, [ 3, 4, 5, [ 8, 9 ] ] ]

// const real_arr = arr.flat(Infinity);
// console.log(real_arr);     //[ 1, 2, 3, 4, 6, 8, 9, 5, 7, 3, 4, 5, 8, 9 ]



// console.log(Array.isArray("Sutun"));   //false
// console.log(Array.from("Sutun"));   // [ 'S', 'u', 't', 'u', 'n' ]
// console.log(Array.from({ name: "Sutun" }));  //[]  interesting


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));   //[ 100, 200, 300 ]


