const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const doneList = document.getElementById("done-list");
const button = document.getElementById("add");


button.addEventListener("click", addTask);


function addTask() {
    if (inputBox.value === '') {
        alert("Skriv noget i feltet først");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1;
        quantityInput.addEventListener("click", function (e) {
            e.stopPropagation();
        });
        li.appendChild(quantityInput);

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
    const task = e.currentTarget;
    task.classList.toggle("checked");

    if (task.classList.contains("checked")) {
        doneList.appendChild(task);
    } else {
        listContainer.appendChild(task);
    }
}


function removeTask(e) {
    e.stopPropagation();
    const task = e.currentTarget.parentElement;
    task.remove();
}
