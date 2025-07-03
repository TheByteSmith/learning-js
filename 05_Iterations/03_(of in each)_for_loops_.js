// OTHER TYPES OF FOR LOOPS

// SUMMARY:
// for-of: Arrays, Strings, Maps (values)
// for-in: Objects (keys)
// forEach: Arrays (callback)

// ===================== OBJECT vs MAP =====================

// ✅ Use OBJECT when:
// - Keys are simple strings or symbols
// - You need JSON serialization
// - Static/fixed key-value data

// ✅ Use MAP when:
// - Keys can be anything (objects, functions, etc.)
// - Insertion order matters
// - Frequent additions/deletions
// - You want cleaner, more performant iteration

// 🔍 Key differences:
// - Map keeps key order 100%
// - Map allows any data type as key
// - Map has built-in size: map.size
// - Object keys are always strings (or symbols)
// - Object has inherited props unless you create it clean: Object.create(null)

// TL;DR:
// Object = basic, old-school key-value storage
// Map = modern, flexible, and just better for dynamic data

// ====== * ====== 
// FOR OF loops
//  for-of is like a cleaner version of a traditional for loop — no index needed (for loop on AUTO mode)

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!" 
for (const greet of greetings) {
    if (greet == " ") // skip space
        continue
    console.log(`Each character is ${greet}`); // all character print one by one
}
// ====== * ====== 
// MAPS
// - Holds key-value pairs
// - Unique KEYS and remembers the order.

const map = new Map()
map.set("IN", "India")
map.set("US", "United States of America")
map.set("FR", "France")
map.set("IN", "India") // ONLY UNIQUE KEYS
console.log(map);


// - logs each [key, value] pair as an array
// for (const key of map) {
//     console.log(key); 
// }


// - for of loop for MAPS: key, value pair
for (const [key, value] of map) {
    console.log(key, ":", value);   
}

// ⚠️ Object is NOT iterable using for-of loop — throws TypeError

// const myGamesObject = {
//     game1: "NFS",
//     game2: "Prototype"
// }

// for (const [key, value] of myGamesObject) {
//     console.log(key, ":", value);
// }

// ====== * ====== 
// FOR IN loops
// - Object is iterable using for-in loop
// - MAP is NOT iterable by for-in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift",
};

for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`);
}

const langs = ["js", "rb", "py", "java", "cpp"];

for (const key in langs) {
    console.log(langs[key]);
}

const myMap = new Map()
myMap.set("IN", "India")
myMap.set("US", "United States of America")
myMap.set("FR", "France")
myMap.set("IN", "India")

// ⚠️ Doesn't actually iterate over map keys — will skip everything (Map not enumerable this way)
for (const key in myMap) {
    console.log(key);
}

// ====== * ====== 
// FOR EACH loops
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (val){
    console.log(val);
} )

// forEach requires a callback — you can use anonymous or named functions, and it auto-passes (value, index, array)

// with arrow fn
coding.forEach( (item) => {
    console.log(item);
})

// with pre-declared fn
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

// forEach has access to value, index, Array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

// forEach with array containing objects
const myCoding = [
    {
        langName: "Javascript",
        langfile: "js",
    },
    {
        langName: "Python",
        langfile: "py",
    },
    {
        langName: "Java",
        langfile: "java",
    },
]

myCoding.forEach( (item)=> {
    console.log(item.langName, "file type =", item.langfile);
    
})
