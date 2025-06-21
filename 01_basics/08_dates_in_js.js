// Decalaring date
let myDate = new Date()

console.log(myDate.toString()); //Sat Jun 21 2025 07:40:08 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 21/6/2025, 7:40:08 am
console.log(myDate.toDateString()); // Sat Jun 21 2025
console.log(typeof myDate); //object

// MONTH START from 0 
let myNewDate = new Date(2023, 0, 23) 
// console.log(myNewDate.toDateString()); // (Mon Jan 23 2023)

// let myNewDate = new Date(2023, 0, 23, 5, 3)
// console.log(myNewDate.toLocaleString()); // (23/1/2023, 5:03:00 am)

// let myNewDate = new Date("2023-01-17")
// console.log(myNewDate.toLocaleString()); // 17/1/2023, 5:30:00 am

// let myNewDate = new Date("23-01-2024")
// console.log(myNewDate.toLocaleString());
// sometimes dd-mm-yyyy may not work, so use iso format where possible
// let myNewDate = new Date("2024-01-23")

let myTimeStamp = Date.now()

console.log(myTimeStamp) // Current time in ms since Jan 1, 1970
console.log("Time ",myNewDate.getTime()); // timestamp for myNewDate in ms
console.log(Math.floor(Date.now()/1000)) // // timestamp for myNewDate in s

let newDate = new Date() // new date object for right now
console.log(newDate); 
console.log(newDate.getMonth() + 1); // getMonth --> 0-11, +1 --> 1-12
console.log(newDate.getDay()); // day of week (sunday)
console.log(newDate.getDate()); // day of month (1-31)

// getDay function in the hard way
const dateInHardWay = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(dateInHardWay);
