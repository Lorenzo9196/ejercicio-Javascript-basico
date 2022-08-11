// continuar video: https://youtu.be/z95mZVUcJ-E?t=7243

// empezando capitulo 2

const h1 = document.querySelector("h1");
let taskInput = document.querySelector("#task");
let contextInput = document.querySelector("#context");
let date = document.querySelector("#date");
let tbod = document.querySelector("#tbod");
let tr = document.createElement("tr");
let td = document.createElement("td");


function btnOnClick() {
    console.log(taskInput.value + contextInput.value + date.value);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    tbod.appendChild(tr).appendChild(td1).innerText=taskInput.value;
    tbod.appendChild(tr).appendChild(td2).innerText=contextInput.value;
    tbod.appendChild(tr).appendChild(td3).innerText=date.value;
    taskInput.value = "";
    contextInput.value = "";
    date.value = "";
}

