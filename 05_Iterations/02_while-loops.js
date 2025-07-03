// while : task is done BEFORE checking condition

/*
while (this condition for iterator is true) {
    do this
    *** Then, change the iterator value so that loop eventually ends ***
    }
*/
let i = 0
while (i <= 10) {
    console.log(`Value of i is ${i}`);
    i = i + 2
    // i = i + 3
    // i = i + 1

}

let myArray = ["flash", "ironman", "batman"]

let hero = 0
while (hero < myArray.length) {
    console.log(`Hero name is ${myArray[hero]}`)
    hero = hero + 1
}

// do while : task is done AFTER checking condition

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10)