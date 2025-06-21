// constructor method
// Singleton --> object made using constructor
// Not useful to us right now
// Object.create


// Object Literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Nakul",
    "full name": "Nakul Lavwanshi",
    age: 89,
    location: "earth",
    email: "someone@dead.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    // mySym: "myKey1", // not like this
    [mySym]: "myKey1"
}

// name, age, email -> js treat all as strings
// you can access name -> with .name
console.log(JsUser.email)
console.log(JsUser["email"])

// console.log(JsUser."full name") 
// you *cannot* access "full name" -> with ."full name"
// Now, we use ["full name"]
console.log(JsUser["full name"])

// typeOf mySym here is str, if mySym.
// typeOf mySym will refer to Symbol defined outside object, if [mySym]
console.log(JsUser.mySym) 

// console.log(typeof(JsUser.mySym)) //not like this
console.log(typeof(JsUser[mySym]))

JsUser.email = "someone@chat.com" //change value of a key in object
// Object.freeze(JsUser)
JsUser.email = "someone@abc.com" 
// If object is freeze, you can't add, remove, or modify any properties.

console.log(JsUser);
// If use mySym we get string key-value pair, like other values
// If use [mySym] we get actual Symbol

JsUser.greeting = function(){
    console.log("Hello, JsUser")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) // this = JsUser
}

console.log(JsUser.greeting); //  func not executed, but we got its reference
console.log(JsUser.greeting()); // prints, then return undefined --> as it doesn't return anything
console.log(JsUser.greetingTwo()); // prints, then return undefined --> as it doesn't return anything
