const accountId = 23484
let accountEmail = "nakul@google.com"
var accountPassword = "1232"
accountCity = "Jaipur"

// empty variable
let accountState

// Cannot change const
// accountId = 3 

console.log(accountId);

// trying to change values of variables

accountEmail = "new@email.com"
accountPassword = "newpass"
accountCity = "Delhi"

console.table([accountId, accountEmail,accountPassword, accountCity])

console.log(accountState);

/*
Prefer not to use var
because of issue in block scope & functional scope
*/