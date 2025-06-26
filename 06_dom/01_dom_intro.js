// All this code is supported by browser engine, not node.js 
// Run in browser console

// window : a complex object
console.log(window)

// access document key of window obejct
console.log(window.document)
// window.document is so commonly used that we have a short hand way of writing it.
console.log(document)

// console.log(document) : return ONLY html document
// in some cases we want something more we can use .dir
console.dir(document)

// there are MANY things you do with document
// below are some random examples

console.log(document.baseURI)
console.log(document.links)

// Sometimes, we get HTMLCollection this is not same as an array.
// but we can use some array methods like below

console.log(document.links[1])

// GET Element by ID
// this give you the tag with the id specified
document.getElementById("someElementId")

// manipulate DOM
document.getElementById("someElementId").innerHTML = "<h1>Some thing you want to change</h1>"