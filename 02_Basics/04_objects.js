// constructor
// const instaUser = new Object() // Singleton object

// literal
const instaUser = {} // Non-Singleton object

instaUser.id = "123abc"
instaUser.name = "abdul sharma"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email: "some@email.com", 
    fullname: {
        userfullname: {
            firstname: "ayan",
            lastname: "johnson"
        }
    }
}

console.log(regularUser.fullname.firstname);

// to skip any missing middle object 
console.log(regularUser?.fullname?.userfullname?.firstname)


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

const objA = {obj1, obj2}
const objB = Object.assign({}, obj1, obj2, obj3)
const objC = {...obj1, ...obj2}

// console.log(obj0);

const users = [
    {
        id: 1,
        email: "a@abc.com"
    },
    {
        id: 1,
        email: "b@abc.com"
    },
    {
        id: 1,
        email: "c@abc.com"
    },
    {
        id: 1,
        email: "d@abc.com"
    },
]

console.log( users[1].email);
console.log(instaUser);

// in all these we get array
console.log(Object.keys(instaUser)) // all keys of object
console.log(Object.values(instaUser)) // all values of object
console.log(Object.entries(instaUser)) // we get array of seperate arrays of key-value pair 


console.log(instaUser.hasOwnProperty('isLoggedIn'))



const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// DESTRUCTURING OBJECT

// const {courseInstructor} = course 
// console.log(courseInstructor);
// OR 
const {courseInstructor: instructor} = course
console.log(instructor);