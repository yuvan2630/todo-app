let taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task.text, task.completed);
    });
};

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    createTask(task, false);

    saveTasks();

    input.value = "";
}

function createTask(taskText, completed) {

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    if (completed) {
        span.style.textDecoration = "line-through";
    }

    span.onclick = function () {
        if (span.style.textDecoration === "line-through") {
            span.style.textDecoration = "none";
        } else {
            span.style.textDecoration = "line-through";
        }
        saveTasks();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

function saveTasks() {

    let tasks = [];

    let items = document.querySelectorAll("#taskList li");

    items.forEach(item => {

        let span = item.querySelector("span");

        tasks.push({
            text: span.textContent,
            completed:
                span.style.textDecoration === "line-through"
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
task.classList.add("fade-out");

setTimeout(() => {
    task.remove();
}, 400);