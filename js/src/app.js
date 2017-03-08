function addTask() {
  let taskDescription = document.querySelector("#task").value;
  canAddTask(taskDescription);
  
  let listItem = mountListItem(taskDescription);
  document.querySelector("#taskList").appendChild(listItem);
  document.querySelector("#task").value = '';
  
}

function canAddTask(task) {
  if(task === '') {
    console.log('A task não pode ter o seu valor vazio'); 
    return 'A task não pode ter o seu valor vazio'; 
  }
}

function mountListItem(taskDescription){
  let taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.id = 'chk'+taskDescription;
  taskCheckbox.onchange = () => this.handleChange(taskCheckbox.id);

  let taskLabel = document.createElement('label');
  taskLabel.textContent = taskDescription;

  let removeTaskItem = document.createElement('input');
  removeTaskItem.type = 'button';
  removeTaskItem.value = 'X';
  removeTaskItem.onclick = () => this.removeTaskItem(taskDescription);

  let listItem = document.createElement('li');
  listItem.id = taskDescription;

  listItem.appendChild(taskCheckbox);
  listItem.appendChild(taskLabel);
  listItem.appendChild(removeTaskItem);  

  return listItem;

}

function removeTaskItem(taskDescription){
  document.querySelector('#'+taskDescription).remove();
}

function handleChange(checkboxId) {
  let checkbox = document.querySelector("#"+checkboxId);
  if(checkbox.checked){
      checkbox.parentElement.style.backgroundColor = "red";
  }else{
      checkbox.parentElement.style = null;
  }
}

module.exports = canAddTask;