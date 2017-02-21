const addTodoItem = function todoItem() {
  var myList = document.querySelector("#myList");
  var task = document.querySelector("#task");
  if(canAddItem(myList, task)){
  myList.innerHTML += "<li>" + task.value +"</li>";
  task.value = "";
  }

}

const canAddItem = function canAddItem(list, task) {
  var errorContainer = document.querySelector("#errorContainer");

    if(!!task.value){
      if(myList.childElementCount > 0){
        for(var i = 0; i <= myList.childElementCount - 1; i++){
          if(task.value === myList.children[i].innerText){
            errorContainer.innerHTML = "Já existe um item com essa descrição.";
            return false
          } else {
            errorContainer.innerHTML = "Add com sucesso";
            return true
          }
        }
      }else {
        errorContainer.innerHTML = "Add com sucesso";
        return true;
      }

    }else {
      errorContainer.innerHTML = "Campo task é de preenchimento obrigatorio";
      return false;
    }
}
