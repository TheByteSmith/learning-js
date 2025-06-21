const name = "Nakul"
const repoCount = 3

// console.log(name + " has " + repoCount + " repos")
// out-dated way, also inefficient

// String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

// Declaring str
const gameName = new String("Nakul-NL")
console.log(gameName[0]) // N
console.log(gameName.__proto__) // Doubt

console.log(gameName.length) //8
console.log(gameName.toLowerCase()) //nakul-nl

// index starts from 0
console.log(gameName.charAt(2)) // k
console.log(gameName.indexOf('l')) // 4
 
const newString = gameName.substring(0, 4) // -ve value will  fallback to 0 or length
// characters upto 4, not including 4
console.log(newString);

const anotherString = gameName.slice(-6, 4) // similar to substring, but we can also use -ve value for start
console.log(anotherString);

const newStringOne = "    some@email.com   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim whitespaces
// VERY USEFUL

const url = "https://google.com/google%20maps"

console.log(url.replace('%20', '-')) // does what it says

console.log(url.includes('https')); // does what it says

console.log(gameName.split('-')); // does what it says, returns array
// VERY USEFUL

/*
SLICE: str and arrays, allows -ve values, end is exclusive
gameName.slice(-6, 4) --> gameName.slice(length(8) - 6, 4)

SUBSTRING: str only, no -ve values (fallback to 0), If start > end, it swaps them
*/