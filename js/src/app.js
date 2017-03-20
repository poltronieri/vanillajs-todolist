var app = () => {
    'use strict';
    return {
      addTask: function() {
        let taskDescription = document.querySelector("#task").value;
        if(app().canAddTask(taskDescription) === 'A task não pode ter o seu valor vazio'){
          alert('Task nao pode ser vazia');
        
        }else {
          let listItem = app().mountListItem(taskDescription);
          document.querySelector("#taskList").appendChild(listItem);
          document.querySelector("#task").value = '';
        }
        
        
      },

      canAddTask: function(task) {
        if(task === '') {
          console.log('A task não pode ter o seu valor vazio'); 
          return 'A task não pode ter o seu valor vazio'; 
        }
      },

      handleChange: function(checkboxId) {
        let checkbox = document.querySelector("#"+checkboxId);
        if(checkbox.checked){
            checkbox.parentElement.style.backgroundColor = "red";
        }else{
            checkbox.parentElement.style = null;
        }
      },

      mountListItem: function(taskDescription){
        let taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.id = 'chk'+taskDescription;
        taskCheckbox.onchange = () => this.handleChange(taskCheckbox.id);

        let taskLabel = document.createElement('label');
        taskLabel.textContent = taskDescription;

        let removeTaskItem = document.createElement('input');
        removeTaskItem.type = 'button';
        removeTaskItem.value = 'X';
        removeTaskItem.className = 'sv-button danger';
        removeTaskItem.onclick = () => this.removeTaskItem(taskDescription);

        let listItem = document.createElement('li');
        listItem.style.display = 'flex';
        listItem.id = taskDescription;

        listItem.appendChild(taskCheckbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(removeTaskItem);  

        return listItem;
      },

      removeTaskItem: function(taskDescription){
        document.querySelector('#'+taskDescription).remove();
      },
    }
}

module.exports = app;