// const score = 400
// Declaring Number
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// how many decimal digits
console.log(balance.toFixed(5));

const otherNumber = 1223.7834
console.log(otherNumber.toPrecision(3));  // 1.22e+3
//returns a STRING!!!
// also round off the value to 3 digits (given in argument)
// 223.7834 => 224
// 1223.7834 => 1.22e+3

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));

// =============== Maths ===============

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.5532)); // 5
console.log(Math.ceil(4.1532)); // 5 (round to upper value)
console.log(Math.floor(4.9532)); // 4 (round to lower value)
console.log(Math.sqrt(1225)); // 4
console.log(Math.min(2, 3, 3, 233,)); // 2
console.log(Math.max(2, 3, 3, 233,)); // 233

console.log(Math.random()) // 0 to 1 any value
console.log((Math.random()*10) + 1) // 
console.log(Math.floor(Math.random()*10) + 1)  

const min = 0
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
Math.random() → 0 to 0.999...
* 10 → 0 to 9.999...
floor → 0 to 9
+1 → 1 to 10
*/

/*
const min = 0
const max = 100
max - min + 1 --> 101

Math.random() → 0 to 0.999...
* 101 → 0 to 100.999...
Math.floor() → 0 to 100 
*/