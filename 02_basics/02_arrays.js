const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) //push works on existing array

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// Concate Operator
const allHeroes = marvel_heroes.concat(dc_heroes) // concat returns a new array
// console.log(allHeroes);

// Spread Operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6],  7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2) // we can also give "Infinity",  in flat

console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // all letters -> element
console.log(Array.from({name: "nakul"})) //empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
