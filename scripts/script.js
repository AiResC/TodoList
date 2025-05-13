let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let deletedTasks = JSON.parse(localStorage.getItem("deletedTasks")) || [];

updateTaskElement();

function handleKey(event) {
	if (event.key === "Enter") {
		addTask();
	}
}

function updateTaskElement() {
	let tasksElement = document.querySelector(".bottom-part");
	tasksElement.innerHTML = "";
	for (let i = 0; i < tasks.length; i++) {
		tasksElement.innerHTML += `
        <div class="task">
             <p class="task-info"> ${tasks[i]}</p>
             <button class="delete-button ${i}" onclick="deleteTask(this)">Delete</button>   
        </div>
        `;
	}
	for (let i = 0; i < deletedTasks.length; i++) {
		tasksElement.innerHTML += `
        <div class="task deleted-task">
             <p class="task-info"> ${deletedTasks[i]}</p>
             <button class="delete-button deleted-button ${i}">Deleted</button>   
        </div>
        `;
	}
}

function addTask() {
	const inputElement = document.querySelector(".input");
	const errorElement = document.querySelector(".error-info");
	const errorBox = document.querySelector(".error-box");
	console.log(inputElement.value);
	if (inputElement.value) {
		tasks.push([inputElement.value]);
		inputElement.value = "";
		errorBox.classList.remove("errored");
		updateTaskElement();
		errorElement.innerHTML = "";
		localStorage.setItem("tasks", JSON.stringify(tasks));
	} else {
		errorBox.classList.add("errored");
		errorElement.innerHTML = `
        ERROR! Task should have a name.
        `;
	}
}

function deleteTask(task) {
	let index = task.classList[1];
	console.log(tasks);
	console.log(index);
	deletedTasks.push(tasks[index]);
	console.log(deletedTasks);
	tasks.splice(index, 1);
	localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
	updateTaskElement();
}

function deleteAllTasks() {
	tasks = [];
	deletedTasks = [];
	localStorage.setItem("deletedTasks", JSON.stringify([]));
	localStorage.setItem("tasks", JSON.stringify([]));
	updateTaskElement();
}
