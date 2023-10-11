const inputBox = document.getElementById('input-box');
const listBox = document.getElementById('taskList');

// to add task in list
function addTask() {
    if(inputBox.value === '')
    {
        window.alert("Text box is empty !! before clicking 'Add' enter your task 👍");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        
        let icon = document.createElement("i");
        if(icon)
        {
            icon.classList.add("fa-regular", "fa-trash-can", "icon")
        }
        li.appendChild(icon);
    }
    inputBox.value = "";
    saveData();
}

// select and remove event
listBox.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "I")
    {
        event.target.parentElement.remove();
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