// for of loop

// ["", "", ""]
// [{}, {}, {}]

/******************************/

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);

// }

/*****************************/

// const greetings = "Hello World!";
// for (const greet of greetings) {
//     if (greet == " ") continue;
//     console.log(`Each character is ${greet}`);

// }

/*****************************/
//Maps

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America")
// map.set('Fr', "France");
// map.set('IN', "India");

// console.log(map);

/* o/p :
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
  */

// for (const m of map) {
//     console.log(m);

// }

/*  o/p :
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */

// for (const [key, value] of map) {
//     console.log(key, ' : ', value);

// }

/*  o/p -
IN  :  India
USA  :  United States of America
Fr  :  France
*/

/*********************************/

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);

// }

/* error : myObject is not iterable */

/*************************************/

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcutis for ${myObject[key]}`);
// }

/* output :
js shortcutis for javascript
cpp shortcutis for C++
rb shortcutis for ruby
swift shortcutis for swift by apple
*/

/*************************************/

// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//     console.log(programming[key]);

// }

/* output :
js
rb
py
java
cpp
*/

/**************************************/

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America")
// map.set('Fr', "France");
// map.set('IN', "India");

// for (const key in map) {
//     console.log(key);

// }

/* No output is here (because Map is not iterable) */