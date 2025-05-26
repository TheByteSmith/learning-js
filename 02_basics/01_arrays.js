// Arrays

const myArr = ["js", 1, 2, 3, 4, 5, true, "Nakul"]

const myHeroes = ["Gnapat Rao", "Shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array Methods

// myArr.push(6)
// myArr.pop() // remove last value/element
// myArr.unshift("test") // adds to beginning, indexes of all elements is changed
// myArr.shift() // removes anything at first index

// myArr.shift() //
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1 , doesn't exit
// console.log(myArr.indexOf(3)); 

// const newArr = myArr.join() // Joins elements of array, output -> string
// console.log(newArr);
// console.log(typeof(newArr));


// console.log(myArr);

// slice, splice

console.log("Original ", myArr); // Original/Slice/Splice, doesn't have to be in arg. Used them just to reduce confusion in console.

// Slice manupulate a copy of array
const myn1 =  myArr.slice(1, 3)
console.log("Slice ", myArr);
console.log(myn1);

// Splice manupulate the original array
const myn2 =  myArr.splice(1, 3)
console.log("Splice ", myArr);
console.log(myn2);