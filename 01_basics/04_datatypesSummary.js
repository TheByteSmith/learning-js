/*
On the basis of how data is stored and accessed from memory.

PRIMITIVE: Call by value (memory reference is not given)
7 Types: String, Number, Boolean, Null, undefined, Symbol, BigInt

Symbol used to make something unique.
BigInt used for Very large values. 
*/

const score = 123 // Number
const scoreValue = 123.42 // Also a Number

const isLoggedIn = true // Boolean
const outsideTemp = null // Completly empty, not zero.
let userEmail; // undefined

// SYMBOLS
const id = Symbol('123') 
const anotherId = Symbol('123') // not same as above
console.log(id === anotherId) // F

// BigInt
const bigNumber = 99954934996890248923449499n


// NON-PRIMITIVE or REFERENCE
// Array, Objects, Functions

// ARRAY
const heroes = ["asdc", "adsd", "adsd"] 

// OBJECT
let myObj = {
    name: "nakul",
    age: 22,
}

// functions stored in a variable
const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof myObj)

/*
JS is DYANMICALLY typed language. 
Type checking is done at runtime, and variables can hold values of different types.
You do not need to declare the data type of a variable explicitly in JavaScript.
*/