const name = "Nakul"
const repoCount = 3

// console.log(name + " has " + repoCount + " repos")

// String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Nakul-NL")
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('l'))
 
const newString = gameName.substring(0, 4) // -ve value will fallback to 0 or length
console.log(newString);

const anotherString = gameName.slice(-8, 4) // similar to substring, but we can also use -ve value for start

const newStringOne = "    some@email.com   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20maps"

console.log(url.replace('%20', '-'))

console.log(url.includes('https'));

console.log(gameName.split('-'));

