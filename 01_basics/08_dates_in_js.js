let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myNewDate = new Date(2023, 0, 23) // month start from 0
// console.log(myNewDate.toDateString());

// let myNewDate = new Date(2023, 0, 23, 5, 3)
// console.log(myNewDate.toLocaleString());

// let myNewDate = new Date("2023-01-17")
// console.log(myNewDate.toLocaleString());

// let myNewDate = new Date("24-01-2024")
// console.log(myNewDate.toLocaleString());

// sometimes dd-mm-yyyy may not work, so use iso format where possible

// let myNewDate = new Date("2024-01-23")
// let myTimeStamp = Date.now()

// // console.log(myTimeStamp)
// // console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})