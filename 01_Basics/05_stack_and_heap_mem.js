// Stack (Primitive), Heap (Non Primitive)
// Stack: we get copy of value
// Heap: we get a reference to original value

// string --> stack

let name_1 = "putin"

let name_2 = name_1
name_2 = "donald duck"

console.log(name_1)
console.log(name_2)

// object --> heap

let user_1 = {
    email: "some@email.com",
    upi: "user@ynl"
}

let user_2 = user_1

user_2.email = "random@mail.com"

console.log(user_1.email);
console.log(user_2.email);