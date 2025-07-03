// Basic comparsion of same datatypes
console.log(2 > 1);  // T
console.log(2 >= 1); // T
console.log(2 <= 1); // F
console.log(2 == 1); // F
console.log(2 != 1); // T

// AVOID THESE COMPARSIONS
console.log("2" > 1); // T
console.log("02" > 1); // T

// Null converted to 0
console.log(null > 0); // F
console.log(null == 0);  // T 
console.log(null >= 0); // F

console.log(undefined == 0); // F
console.log(undefined > 0); // F
console.log(undefined < 0); // F

// === --> STRICT CHECK (checks value & datatypes both)
console.log("2" === 2); // F