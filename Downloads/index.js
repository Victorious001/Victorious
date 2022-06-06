function addHeading(){
    const heading = document.createElement("h1");
    const div = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = "This is the first paragraph";
    div.append(para);
    document.body.append(div)
    heading.textContent = "This is the fisrt heading created by jS";
    document.body.appendChild (heading);
}function changeColor(){
    const pcolor = document.getElementById("h1");
    pcolor.style.color = "red";
}
function addBorderOnTable (){
    const table = document.getElementById("table");
    const tableAttr = table.attributes;

    for (let i = 0; i < tableAttr.length, i++;) {
        if (tableAttr[i].nodeName.toLocaleLowerCase() === "border") {
            table.border = "1";
        }
    }
}
function selectMultiple () {
    const multiPara = document.querySelector("td");
    const tdata = multiPara.querySelectorAll("td")
    console.log(multiPara[2]);
}

const btn = document.querySelector ("button")
const  controller = new AbortController();
function random (number) {
    return Math.floor(Math.random() * (number +1));
}
function changeBgColor (e) {
    bgColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = bgColor;
}

btn.addEventListener("mouseout", changeBgColor,{signal: controller.signal});
//controller.abort();
btn.addEventListener("mouseout", function(e){
    const paragra = document.getElementById("par");
    paragra.style.color = "blue"
})
const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const error = document.querySelector("#submit-error");
form.addEventListener("submit", event => {
    if (fname.value.trim() === "" || lname.value.trim() === "") {
        event.preventDefault();
        error.textContent = "Please fill in both fields"
        error.style.color = "red";
    }
    else {
        error.textContent = `Success ${fname} ${lname}`;
        error.style.color = "green";
    }
    
});
