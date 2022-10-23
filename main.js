const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("#button");
const list = document.querySelector("ul");
const msg = document.querySelector("#message");
const showCompleted = document.querySelector("p");
const count = document.querySelector("#count");
const todoArr = [];

let message;
let countValue = 0;





addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    const text = input.value;

    if (text != "" && text.length < 25) {

      msg.innerHTML = "";
      input.value = "";
      const task = document.createElement("li");
      const taskLabel = document.createElement("span");
      const trashButton = document.createElement("button");
  
      trashButton.innerHTML = "&#128465";
      trashButton.setAttribute("id", "deleteBtn");
  
      list.appendChild(task);
      taskLabel.innerText = text;
      taskLabel.setAttribute("class", "preSpan");
      task.appendChild(taskLabel);
      task.appendChild(trashButton);
  
      const taskObj = { task: text, isComplete: false };
      todoArr.push(taskObj);

      trashButton.addEventListener("click", function () {
        if (task.getAttribute("class") == "completed") {
          countValue--;
          task.remove();
        } else {
          task.remove();
        }
        if (countValue == 0) count.innerHTML = "0 completed";
        if (countValue > 0) count.innerHTML = countValue + " completed";
      });
  
      
      taskLabel.addEventListener("click", function () {
        if (task.getAttribute("class") == "completed") {
          task.setAttribute("class", "");
          taskObj.isComplete = false;
          countValue--;
        } else {
          task.setAttribute("class", "completed");
          taskObj.isComplete = true;
          countValue++;
        }
        if (countValue == 0) count.innerHTML = "0 completed";
        if (countValue > 0) count.innerHTML = countValue + " completed";
      });
    } else {
      msg.innerHTML = "Input must not be empty";
        if(text.length >= 25)
          msg.innerHTML = "Text is too long";
}})