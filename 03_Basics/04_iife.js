// Immediately Invoked Function Expression (IIFE)

// NAMED IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})(); // Semicolon to end the code


// UNNAMED IIFE
((name) => {
  console.log(`DB TWO CONNECTED ${name}`);
})("Nakul");

// chai()

/*
()()
first perenthesis -> code block
second perenthesis -> execution call
example: chai()


iife -> 
we write code in 1st ()
execute code in 2nd ()

iife->
to avoid problems due to variables of global scope
*/
