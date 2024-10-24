document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("task-list");
  const addTaskBtn = document.getElementById("add-task-btn");
  const newTaskInput = document.getElementById("new-task");

  let tasks = [];

  const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.innerHTML = `${index + 1}. ${task} <button onclick="deleteTask(${index})">Delete</button>`;
      taskList.appendChild(taskItem);
    });
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
  };

  addTaskBtn.addEventListener("click", () => {
    const task = newTaskInput.value;
    if (task) {
      tasks.push(task);
      newTaskInput.value = "";
      renderTasks();
    }
  });

  window.deleteTask = deleteTask;
});
