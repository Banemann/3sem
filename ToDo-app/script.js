const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const doneList = document.getElementById("done-list");
const button = document.getElementById("add");

button.addEventListener("click", addTask);


function addTask() {
    if (inputBox.value === '') {
        alert("Skriv noget først");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener("click", removeTask);
        li.appendChild(span);

        li.addEventListener("click", toggleTask);
        listContainer.appendChild(li);
    }
    inputBox.value = "";

}

function toggleTask(e) {
    const task = e.target;
    task.classList.toggle("checked");

    if (task.classList.contains("checked")) {
        doneList.appendChild(task);
    } else {
        listContainer.appendChild(task);
    }
    
}

function removeTask(e) {
    const task = e.target.parentElement;

    task.remove();
}
