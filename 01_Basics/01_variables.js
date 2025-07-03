const accountId = 23484
// accountId = 3 (this won't happen)
// Cannot change const

// use when value can change.
let accountEmail = "nakul@google.com"

/*
Prefer not to use var
because of issue in block scope & functional scope
*/
var accountPassword = "1232"

// another way to declare
accountCity = "Jaipur"

// empty variable
let accountState

// print accountId on screen
console.log(accountId);


// trying to change values of variables
accountEmail = "new@email.com"
accountPassword = "newpass"
accountCity = "Delhi"

// Another method to console log 
console.table([accountId, accountEmail,accountPassword, accountCity, accountState])