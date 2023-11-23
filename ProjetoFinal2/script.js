const todoList = new TodoList();

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = todoList.addTask(taskDescription);
    displayTasks();
    taskInput.value = '';
  }
}

function editTask(id) {
  const newDescription = prompt('Digite a nova descrição:');
  if (newDescription !== null) {
    const editedTask = todoList.editTask(id, newDescription);
    displayTasks();
  }
}

function removeTask(id) {
  const confirmDelete = confirm('Tem certeza que deseja excluir esta tarefa?');
  if (confirmDelete) {
    todoList.removeTask(id);
    displayTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  todoList.listTasks().forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.id}</span>
      <span>${task.description}</span>
      <button onclick="editTask(${task.id})">Editar</button>
      <button onclick="removeTask(${task.id})">Excluir</button>
    `;
    taskList.appendChild(li);
  });
}


function searchTask() {
  const taskIdInput = prompt('Digite o ID da tarefa:');
  const taskId = parseInt(taskIdInput);

  if (!isNaN(taskId)) {
    const foundTask = todoList.searchTaskById(taskId);

    if (foundTask) {
      alert(`Tarefa encontrada: ${foundTask.description}`);
    } else {
      alert('Tarefa não encontrada.');
    }
  } else {
    alert('ID inválido. Digite um número válido.');
  }
}


displayTasks();
