let tasks = ["wash dishes"];

updateTaskElement();

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
	} else {
		errorBox.classList.add("errored");
		errorElement.innerHTML = `
        ERROR! Task should have a name.
        `;
	}
}

function deleteTask(task) {
	tasks.pop(task.classList[1]);
	updateTaskElement();
	("");
}
