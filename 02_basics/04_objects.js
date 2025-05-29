// const instaUser = new Object() // Singleton object
const instaUser = {} // Non-Singleton object

instaUser.id = "123abc"
instaUser.name = "abdul sharma"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@email.com", 
    fullname: {
        userfullname: {
            firstname: "ayan",
            lastname: "johnson"
        }
    }
}

// console.log(regularUser.fullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj3 = {obj1, obj2}
// const obj0 = Object.assign({}, obj1, obj2, obj3)
const obj0 = {...obj1, ...obj2}

// console.log(obj0);

const users = [
    {
        id: 1,
        email: "a@abc.com"
    },
    {
        id: 1,
        email: "a@abc.com"
    },
    {
        id: 1,
        email: "a@abc.com"
    },
    {
        id: 1,
        email: "a@abc.com"
    },
]

console.log( users[1].email);
console.log(instaUser);

console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty('isLoggedIn'))


const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  

// const {courseInstructor} = course // OR USE BELOW SYNTAX
const {courseInstructor: instructor} = course

console.log(courseInstructor)