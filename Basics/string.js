const name = "sutun";
const repoCount = 5;

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sutun');
console.log(gameName);  //[String: 'sutun']
console.log(gameName[0]);  //s
console.log(gameName.__proto__);  //{}

console.log(gameName.length);  //5
console.log(gameName.toUpperCase());  //SUTUN

console.log(gameName.charAt(3));  //u
console.log(gameName.indexOf('t'));  //2

const newStr = gameName.substring(0, 4); //sutu
console.log(newStr);   //sutu

const anotherStr = gameName.slice(-5, 4);
console.log(anotherStr);  //sutu

const str1 = "   sutun   ";
console.log(str1);   //    sutun   
console.log(str1.trim());  //sutun

const url = "https://sutun.com/sutun%20behera";
console.log(url);  //https://sutun.com/sutun%20behera

console.log(url.replace('%20', '-'));  //https://sutun.com/sutun-behera

console.log(url.includes('sutun'));  //true
console.log(url.includes('bapi'));  //false

console.log(gameName.split('t')); //[ 'su', 'un' ]




