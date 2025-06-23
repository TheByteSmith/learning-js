// for loop

for (let i = 0; i <= 10; i++) {
    if (element == 5) {
        console.log("number 5 is here");
    }
    console.log(element);
}

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

// iterate through myArray
let myArray = ["flash", "ironman", "batman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
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
