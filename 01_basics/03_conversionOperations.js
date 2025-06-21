let score = 33 // Number
// let score = "33" // String

console.log(typeof score)
console.log(typeof (score))

// Score converted into number
let valueInNumber = Number(score)  
console.log(typeof (valueInNumber))

// CONVERSION
/*
Score --> Type          ==> Convert Score to Number --> Type
33 --> Number           ==> 33  --> Number
33abc --> String        ==> NaN --> Number
NaN --> Number          ==> 0 --> Number
Undefined --> Undefined ==> 0 --> Number 
Null --> Object         ==> 0 --> Number !IMPORTANT
True --> Boolean        ==> 1 --> Number
False --> Boolean       ==> 0 --> Number
*/

// BOOLEAN
/*
"" = flase (empty str)
"text" = true (non-empty str)
1 = true; 0 = false
*/

let isLoggedIn = "ad" // True = 1
// let isLoggedIn = "" // False = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 13
let stringNumber = String(someNumber)
console.log(stringNumber);   // 13
console.log(typeof stringNumber); // String


//  =============== Operations =============== //

// Negative Value
let value = 3
let negValue = -value
console.log(negValue);

// Basic Arithmetic Operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 raised to the power 3
console.log(2/3);
console.log(2%3); // remainder

// STRING OPERATIONS
let str1 = "hello "
let str2 = "world"

let str3 = str1 + str2
console.log(str3);

// 
console.log("1" + 2); // 12 (Both str)
console.log(1 + "2"); // 12 (Both str)
console.log("1" + "2"); // 12 (Both str)
console.log(1 + 2); // 3 (Both Num)

console.log("1" + 2 + 2); // 122 (Both str)
console.log(1 + 2 + "2"); // 32 (1st & 2nd Num, 3rd Str)

/*
Do Not write these weird calcs, no one likes them. Instead use brackets.
console.log( 3 + 4 * 5 % 3);
*/

// Or something like this
console.log(true);  // true
console.log(+true);  // 1
console.log(+""); // 0

// Shit
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// pre & post operators
let gameCounter = 100
// gameCounter++  Display, then increase
// ++gameCounter  Increase, then Display
console.log(++gameCounter);

let y = NaN
console.log(typeof (y))
let x = Number(null)
console.log(x)
console.log(typeof (x))