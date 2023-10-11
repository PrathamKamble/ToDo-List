const inputBox = document.getElementById('input-box');
const listBox = document.getElementById('taskList');

// to add task in list
function addTask() {
    if(inputBox.value === '')
    {
        alert("no task");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// select and remove event
listBox.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// this will save data on localStorage
function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}

// this will show saved data whenever you refresh
function showData(){
    listBox.innerHTML = localStorage.getItem("data");
}
showData();