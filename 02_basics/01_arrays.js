// Arrays -> List

// Declaring Array
const myArr = ["js", 1, 2, 3, 4, 5, true, "Nakul"]
const myHeroes = ["Ganpat Rao", "Shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)


// console.log(myArr[0]); // element at index 0

// Array Methods

myArr.push(6) // add "6" to the end, 
myArr.pop() // remove last value/element
myArr.unshift("test") // adds to beginning, indexes of all elements is changed
myArr.shift() // removes anything at first index

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 , doesn't exist
console.log(myArr.indexOf(3)); 

const newArr = myArr.join() // Joins elements of array, output --> string
console.log(typeof(newArr));
console.log(newArr); //js,1,2,3,4,5,true,Nakul

// slice, splice
console.log(myArr)

// Named variables ‘Original/Slice/Splice’ just to clarify output in console.
console.log("Original ", myArr); 

// Slice manipulate a copy of array, excludes end
const myn1 =  myArr.slice(1, 3)
console.log("Slice ", myArr);
console.log(myn1);

// Splice manipulate the original array, includes end
// Splice returns the removed items
const myn2 =  myArr.splice(1, 3)
console.log("Splice ", myArr);
console.log(myn2);