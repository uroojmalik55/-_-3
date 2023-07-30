let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    let taskText = document.createElement("span");
    taskText.textContent = inputs.value;

    let editBtn = document.createElement("i");
    editBtn.classList.add("fa", "fa-pencil");
    editBtn.addEventListener("click", editTask);

    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa", "fa-trash");
    deleteBtn.addEventListener("click", remove);

    newEle.appendChild(taskText);
    newEle.appendChild(editBtn);
    newEle.appendChild(deleteBtn);
    text.appendChild(newEle);
    inputs.value = "";

    function remove() {
      newEle.remove();
    }

    function editTask() {
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = taskText.textContent;
      newEle.replaceChild(editInput, taskText);

      let saveBtn = document.createElement("i");
      saveBtn.classList.add("fa", "fa-check");
      saveBtn.addEventListener("click", saveTask);

      newEle.replaceChild(saveBtn, editBtn);
      newEle.appendChild(deleteBtn);

      function saveTask() {
        taskText.textContent = editInput.value;
        newEle.replaceChild(taskText, editInput);
        newEle.replaceChild(editBtn, saveBtn);
      }
    }
  }
}
