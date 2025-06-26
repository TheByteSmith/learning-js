// for of loops

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ")
        continue
    console.log(`Each char is ${greet}`);
}

// Maps
// Unique values and remembers the order.

const map = new Map()
map.set("IN", "India")
map.set("US", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

console.log(map);

// for (const key of map) {
//     console.log(key); 
// }

// for of loop: key, value pair
for (const [key, value] of map) {
    console.log(key, ":", value);   
}

// Object is not iterable using for-of loop
