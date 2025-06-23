const userEmail = "sam@email.com"

if (userEmail) {
    console.log("Got user Email")
}else{
    console.log("Don't have user Email")
}

/*
FALSY VALUES
    false, 0, "", null, undefined, NaN 
    BigInt 0n
    -0, 

TRUTHY VALUES
    "0", "false", 'false', " ", "any string", [], {}, function(){}
*/

const myArr = []
if (myArr.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null & undefined
// Basically, a fallback for null & undefined values.

let val1; // undefined
val1 = 5 ?? 10
console.log(val1);

let val2; // undefined
val2 = null ?? 10
console.log(val2);

let val3 = undefined ?? 15
console.log(val3);

// accepts first valid value
let val4 = null ?? 10 ?? 20
console.log(val4);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Price more than 80") : console.log("Price less than 80");

