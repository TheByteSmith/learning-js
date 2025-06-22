function sayMyName(){
    console.log("N")
    console.log("A")
    console.log("K")
    console.log("U")
    console.log("L")
}

sayMyName()
// sayMyName -> reference, () -> execution

function addTwoNumbers(num1, num2){
    // ONE WAY
    // console.log(num1 + num2); 

    // ANOTHER WAY
    // let result = num1 + num2
    // return result

    // BEST WAY imo
    return num1 + num2
}

// Some weird POSSIBILITIES
// addTwoNumbers(2, "4") // 24
// addTwoNumbers(2, "a") // 2a
// addTwoNumbers(2, null) // 2

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

// # Nothing executes afer return


// function loginUserMessage(username){ 
// username is a parameter

function loginUserMessage(username = "Some User"){ // "Some User" is default value for username
    /*
    Falsy values in JS: undefined, null, false, "", 0, NaN
    ! --> converts falsy to true
    
    if (...) runs when the condition is truthy
    So: if (!username) runs when username is falsy

    This:
    if (!username) { ... } is the same as:
    if (username === undefined || username === null || username === "" ...)
*/

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("nakul"))
// console.log(loginUserMessage())


// PASS MULTIPLE VALUES TO FUNCTION
// function calculateCartPrice(val1, val2, ...num1){
    // val1 = 200 val2 = 250, rest we get in an array

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 250, 300, 234, 400));

// Making a function to handle an object
const user = {
    username: "hitesh",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// Making a function to handle array
const myNewArray = [200, 500, 400, 100]

function getSecondValue(getArray) {
    return getArray[1]
}

console.log(getSecondValue(myNewArray)); // testing on array


