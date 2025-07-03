// treat all JS code as newer version
"use strict"

// we are using nodejs, not browser
// alert(3 + 3)  

// code readability reduced
/* console.log(3
     +
     3); console.log("Hitesh");
*/

// DATATYPES
let name = "Hitesh"
let age = 19
let isLoggedIn = false

/*
number = 2^53 (range)
Bigint = whatever doesn't fit in number
String = "" anything in quotes
Boolean = true / false, 1 / 0
Null = standalone value (representation of empty value)

example: we don't get (temprature) value from server, so we will leave it empty beacuase we cannot use "0" if we didn't got the value. As, "0" in this case is a valid temprature.

Undefined = value not defined
Symbol = unique
Object = also a datatype
*/

// OBJECT
console.log(typeof "hitesh");
console.log(typeof null); // Object
console.log(typeof undefined); // Undefined
console.log(null) 