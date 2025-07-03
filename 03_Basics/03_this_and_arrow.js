// CONTEXT

const user = {
    username: "sam",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        // "this" refers to current object (user)
        console.log(this); // entire object logged
    }
}

user.welcomeMessage()
user.username = "tom" // changing property
user.welcomeMessage() // updated output

console.log(this); 
// In Node.js global scope, "this" refers to empty object: {}


// Regular function
function chai() {
    let username = "nakul"
    console.log(this); // refers to global object (in Node: {})
    console.log(this.username); // undefined because "this" doesn't refer to function scope
}

chai()


// Arrow function
const anArrowFunc = () => {
    let username = "nakul"
    console.log(this); // arrow function doesn't get its own "this", inherits from parent (global)
    console.log(this.username); // still undefined
}

anArrowFunc()


// ARROW FUNCTIONS

// Different ways to write arrow functions:

// 1. Basic arrow function with explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 2. Implicit return (no need to use return keyword)
// const addTwo = (num1, num2) => num1 + num2

// 3. Implicit return with parentheses
// const addTwo = (num1, num2) => (num1 + num2)

// 4. Returning object needs extra parentheses
// const addTwo = (num1, num2) => { username: "nakul" } // wrong - returns undefined
const addTwo = (num1, num2) => ({ username: "nakul" }) // correct - wrap object in ()

console.log(addTwo(2, 3)) // returns object: { username: 'nakul' }


// Real use case of arrow function
const myArr = [2, 3, 56, 7, 8]

// Example placeholder
// myArr.forEach(() => {
//     // write logic here
// })
