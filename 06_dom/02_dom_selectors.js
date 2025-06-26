// ===============
// getElementById
// ===============

document.getElementById("title")
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

document.getElementById("title").id
// "title"

document.getElementById("idThatDoesNotExist").id
// null

document.getElementById("title").className
// "heading"

document.getElementsByClassName("heading")
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

document.getElementById("title").getAttribute("id")
// "title"

document.getElementById("title").getAttribute("class")
// "heading"

document.getElementById("title").setAttribute("class", "test")
// console: undefined
// but attributes has been set
// this method ALWAYS OVERRIDE the previous Attribute

// ===============
// Setting styles
// ===============

const title = document.getElementById("title")
title.style.backgroundColor = "green"
title.style.padding = "15px"
title.style.borderRadius = "15px"

// Getting content: Use Case dependent
title.innerText // Gets content that is visible
title.textContent // Get all content, visible or not.
title.innerHTML // Gets entire tag

// ===============
// QUERY SELECTOR
// ===============

document.querySelector("h2")
// <h2>Lorem ipsum dolor sit.</h2>

document.querySelector("#title")
// <h1 id="title" class="heading">DOM Learning on Chai aur code <span style="display: none;">Hidden Text</span></h1>

document.querySelector(".heading")
// <h1 id="title" class="heading">DOM Learning on Chai aur code <span style="display: none;">Hidden Text</span></h1>
// 

document.querySelector("input[type=password]")
// <input type="password" name="" id="">

document.querySelector("p:first-child")
// null

document.querySelector("ul")
// <ul>…</ul>
const myUl = document.querySelector("ul")
myUl.querySelector("li")
// <li>...</li>

const turnGreen = myUl.querySelector("li")
turnGreen.style.backgroundColor = "green"
// "green"
turnGreen.style.padding = "16px"
// "16px"
turnGreen.innerText = "one"
// "one"

// ==================
// Selecting Multiple 
// ==================

// NodeList are not pure array.
// For example, they don't have map prototype

document.querySelectorAll("li")
//NodeList(4) [li, li, li, li]

const tempLiList = document.querySelectorAll("li")

tempLiList.style.color = "green"
// doesn't work lie that

tempLiList[0].style.color = "green"

const myH1 = document.querySelectorAll("h1")
myH1[0].style.color = "blue"

// ==================
// Apply to Multiple 
// ==================
tempLiList.forEach(function (listItem) {
    listItem.style.backgroundColor = "red"
})

document.getElementsByClassName("list-item")
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// *** You CANNOT use forEach on HTMLCollection ***

// ====================================
// Convert HTMLCollection to Array 
// ====================================
Array.from(tempClassList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

const myConvertedArray = Array.from(tempClassList)

// ====================================
// Practice on JavaScript wiki page 
// ====================================

const h2Elements = document.querySelectorAll("h2")
h2Elements[1]
// <h2 id="History">History</h2>


const myH2 = document.querySelectorAll(".mw-heading")
myH2.forEach((h) => h.style.backgroundColor = "red")
