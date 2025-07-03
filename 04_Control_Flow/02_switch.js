// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
/*
Whereever key matches, all code after that is executed. EXCEPT DEFAULT.
Now, "break" breaks the flow.

You can use all datatypes in this, not just numbers.
*/

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Apr");
        break;
    case 4:
        console.log("Mar");
        break;

    default:
        console.log("Default Case Match");
        break;
}