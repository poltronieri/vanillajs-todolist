function addTask() {
  let task = document.querySelector("#task").value;
  canAddTask(task);

  let taskItem = document.createElement('input');
  taskItem.type = 'checkbox';
  taskItem.id = task;
  
  let taskList = document.querySelector("#taskList");
  taskList.appendChild(taskItem);
  // task.value = "";
}

function canAddTask(task) {
  if(task === '') { 
    throw 'A task não pode ter o seu valor vazio'; 
  }
}
