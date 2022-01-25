// We code it together

// 1. Select heading h2
// querySelector
// querySelectorAll
// getElementByld

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with id #list using querySelector

const list = document.querySelector("#list");
console.dir(list);

// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. Select single li

const listItem = document.querySelector("li");
console.log(listItem);

// 6.
//  a. Select Multiple li's
//  b. Loop on the list items

const listItems = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].innerText);
}

// 7.
// a. select h1 element
// b. Change the color of that h1 to be purple
// c. Change the border to be 1px solid green
// d. Change background colour to be light gray
// e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

const heading1 = document.querySelector("h1");
console.log(heading1);
heading1.style.color = "#456123";
heading1.style.border = "5px solid green";
heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";

// 1. select all the div element
// 2. check if it has any class name
// 3. add a class to this div
// 4. see if it has a class name now
// 5. add another class to the div
// so in total i have two class names on the div

const myDiv = document.querySelector("div");
myDiv.classList.add("container");
console.dir(myDiv); // div.container
console.log(myDiv.className); // container
myDiv.classList.add("second-class");
console.dir(myDiv); // div.container.second-class

// 1. select the h1 and change the innerText

// 2.loop through al the li element and change the innerText value to be changed

// 3.change the innerHTML of the h1 to be updated using innerHTML

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

const openHeading = document.querySelector("h1");
openHeading.innerText = "Nsebo";

const allTheListItems = document.querySelectorAll("li");
for (let i = 0; i < allTheListItems.length; i++) {
  allTheListItems[i].innerText = " My " + allTheListItems[i].innerText;
}

const pageHeading2 = document.querySelector("h1");
pageHeading2.innerText = "updated Nsebo";

const someContainer = document.querySelector("div");

someContainer.innerHTML = `<p>
<b>Bold text </b> not bold text
</p>`;

// 5. select the ul
//  a. get the existing HTML inside the ul element and assign it to a variable
//  a. create the new li HTML
//  b. set the uls new HTML to the existing HTML plus the new HTML

const list3 = document.querySelector("ul");
const existingHTML = list3.innerText;
const newHMTLli = `<li>Hello i am a new pet</li>`;

list3.innerHTML.existingHTML + newHMTLli;
list3.innerHTML += newHMTLli;
