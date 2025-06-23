// if

if (true) {
    // code execute
}

if (false) {
    // code not execute
}

/*
<, >, <=, >=, ==, 
!=  (not equal) 
=== (value & type)
!== ()
*/

const temprature = 41;
if (temprature < 50) {
    console.log("Temprature is less than 50");
} else {
    console.log("Temprature is more than 50");
}

const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`User can ${power}`);
}

// IMPLICIT SCOPE
const balance = 1000;
if (balance > 500)
    console.log("test"), console.log("code in next line without {}");
// after comma, we can write more code in multiple lines
// but this is not recommended. Code Readability

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
verifiedEmail = true

const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if (userLoggedIn && debitCard && verifiedEmail) {
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User Logged In");
}