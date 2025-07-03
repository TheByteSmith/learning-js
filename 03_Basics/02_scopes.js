let a = 1000
console.log("OUTER: ", a);


if (true) {
    let a = 10
    const b = 20
    var c = 30
    // c = 30 this is also equivalent to var c = 30
    console.log("INNER: ", a)
}

// console.log(b); // b not defined in global scope
console.log(c); // c doesn't give a f about scope, 

/*
Definition defined in global scope can be used anywhere.
Definition defined in block scope can be used on in the block.
*/

function one(){
    const username = "nakul"
    function two(){
        const website = " youtube"
        console.log(username)
    }
    // console.log(website); // error
    
    two()
}

one()

/*
Child can access variables from parent
Parent can NOT access variables from child
*/

if (true) {
    const username = "nakul"
    if (username === "nakul") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // error   
}

// console.log(username); //error 

// ========== interesting ==========

// (something called Hoisting, discussed later)


addOne(5) // executed, even though it's called before declaration
function addOne(num) {
    return num + 1
}

addTwo(5) // cannot access addTwo, before declaration
const addTwo = function(num) {
    return num + 2
}