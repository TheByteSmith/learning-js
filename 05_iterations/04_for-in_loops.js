// for in loops

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

// Map is not iterable by for-in loop
const myMap = new Map()
myMap.set("IN", "India")
myMap.set("US", "United States of America")
myMap.set("FR", "France")
myMap.set("IN", "India")

for (const key in myMap) {
    console.log(key);
}