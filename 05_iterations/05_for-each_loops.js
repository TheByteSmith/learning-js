const coding = ["js", "ruby", "java", "python", "cpp"]


// forEach function
coding.forEach(function (val){
    console.log(val);
} )

// with arrow functions
coding.forEach( (item) => {
    console.log(item);
    
})

// with pre-declared function
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

// forEach has access to value, index, Array
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

// forEach with array containing objects
myCoding = [
    {
        langName: "Javascript",
        langfile: "js",
    },
    {
        langName: "Python",
        langfile: "py",
    },
    {
        langName: "Java",
        langfile: "java",
    },
]

myCoding.forEach( (item)=> {
    console.log(item.langName, "file type =", item.langfile);
    
})