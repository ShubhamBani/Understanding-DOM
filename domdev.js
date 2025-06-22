// DOM 
// alert("Hello, World!");
// console.log("Hello, World!");
// document.title = "Hello, World!";
console.dir(document);
// document.body.childNodes[7].textContent = "You are a developer!";
let headings = document.getElementsByClassName("headingClass");
console.dir(headings);
console.log(headings);

let title = document.getElementById("headingId");
console.dir(title);

let elements = document.getElementsByTagName("p");
console.dir(elements);

console.dir(document.body.firstChild);

let img =  document.querySelector("img");
console.log(img);
let image = img.getAttribute("src");
console.log(image);

const btn = document.getElementById("btn");
const list = document.getElementById("list");

if (btn) {
    btn.addEventListener("click", () => {
        console.log("Button clicked!");
        document.body.style.backgroundColor = "black";
    list.style.color = "white";
    });
}

if (btn) {
    btn.addEventListener("dblclick", () => {
        console.log("Button double clicked!");
        document.body.style.backgroundColor = "lightblue";
    list.style.color = "black";
    });
}

if (btn) {
    btn.addEventListener("mouseover", () => {
        console.log("Mouse over the button!");
        btn.setAttribute("name", "button");
        btn.style.color = "black";
        btn.style.backgroundColor = "yellow";
    });
}
if (btn) {
    btn.addEventListener("mouseout", () => {
        console.log("Mouse out of the button!");
        btn.style.backgroundColor = "";
    });
}