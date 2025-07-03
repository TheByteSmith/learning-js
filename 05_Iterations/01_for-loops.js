// for loop
/*
for (let iterator; condition for iterator; do this after every cycle of loop ){
    do this if condition for iterator is true 
    }
*/

for (let i = 0; i <= 10; i++) {
    if (element == 5) {
        console.log("number 5 is here");
    }
    console.log(element);
}

// Nested for loops

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`Outer loop value ${i} and inner loop value ${j}`);
    }
}

// multiplication tables
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        let k = i * j;
        console.log(`${i} * ${j} = ${k}`);
    }
    console.log(" ");
}

// iterate through an Array
let myArray = ["flash", "ironman", "batman"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


// BREAK AND CONTINUE

// break = end the loop, and exit the scope
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is here");
        break;
    }
    console.log(i);
}

// continue = skip the condition once, but won't exit the loop or scope
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is here");
        continue;
    }
    console.log(i);
}
