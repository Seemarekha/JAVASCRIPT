// for-each loop

// const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//     console.log(item);

// })

/*  output :
js
ruby
java
python
cpp
*/

/****************************************/

// coding.forEach((item) => {
//     console.log(item);

// })
/*  output :
js
ruby
java
python
cpp
*/

/****************************************/

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

/*  output :
js
ruby
java
python
cpp
*/

/****************************************/

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })

/*  output :

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/

/***************************************/

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
//     {
//         languageName: "C++",
//         languageFileName: "cpp"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(item.languageName);

// })

/* output :
javascript
java
python
C++
*/

/****************************************/

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

/* output :
js
ruby
java
python
cpp
undefined
*/

/****************************************/

const muNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = muNums.filter((num) => num > 4);
// console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]


// const newNums = muNums.filter((num) => { 
//     num > 4 
// });
// console.log(newNums);  //[]


// const newNums = muNums.filter((num) => {
//     return num > 4
// });
// console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ]


// const newNums = [];
// muNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);   //[ 5, 6, 7, 8, 9, 10 ]

/****************************************/

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1969, edition: 1998
    },
    {
        title: 'Book Three', genre: 'History', publish: 2001, edition: 2008
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1996, edition: 2007
    },
    {
        title: 'Book Five', genre: 'Science', publish: 2010, edition: 2010
    },
    {
        title: 'Book Six', genre: 'History', publish: 1999, edition: 2014
    }
];


// const userBooks = books.filter((b) => b.genre == 'History');
// console.log(userBooks);

/* output:
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 2001,
    edition: 2008
  },
  { title: 'Book Six', genre: 'History', publish: 1999, edition: 2014 }
]
  */



// const userBooks = books.filter((b) => b.publish >= 2000);
// console.log(userBooks);

/* output:
[
  {
    title: 'Book Three', 
    genre: 'History',
    publish: 2001,
    edition: 2008
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2010,
    edition: 2010
  }
]
  */



// const userBooks = books.filter((b) => b.publish >= 2000 && b.genre == "History");
// console.log(userBooks);

/*  output :
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 2001,
    edition: 2008
  }
]
  */