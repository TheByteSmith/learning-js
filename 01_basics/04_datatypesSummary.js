// On the basis of how data is stored and access from memory.

// Primitive: Call by value (memory ref not given)
// 7 Types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 123
const scoreValue = 123.42

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 9995493499649499n


// Non-Primitive or Reference
// Array, Objects, Functions

const heroes = ["asdc", "adsd", "adsd"] //array

// object
let myObj = {
    name: "nakul",
    age: 22,
}

// functions stored in a variable
const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof myObj)

// JS is dyanmically typed language. 
// Type checking is done at runtime, and variables can hold values of different types
// You do not need to declare the data type of a variable explicitly in JavaScript