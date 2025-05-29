// Singleton 


// Object Literals

const mySym = Symbol("key1")

// Object.create // constructor method

// name, age, email -> js treat all as strings
// you can access name -> with .name
// you *cannot* access "full name" -> with ."full name"

// Now, we use ["full name"]

const JsUser = {
    name: "Nakul",
    "full name": "Nakul Lavwanshi",
    age: 89,
    // mySym: "myKey1", // not like this
    [mySym]: "myKey1",
    location: "earth",
    email: "someone@dead.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

// console.log(JsUser."full name") cannot use this
console.log(JsUser["full name"])

console.log(JsUser.mySym)

// console.log(typeof(JsUser.mySym)) //not like this
console.log(typeof(JsUser[mySym]))

myArray = ["n", "a"]

JsUser.email = "someone@chat.com" //change value of a key in object
// Object.freeze(JsUser)
JsUser.email = "someone@abc.com" // wont change as obj is freeze

console.log(JsUser);
// If use mySym we get string key-value pair, like other values
// If use [mySym] we get actual Symbol

JsUser.greeting = function(){
    console.log("Hello, JsUser")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

// console.log(JsUser.greeting); //  func not executed, but we got its reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
