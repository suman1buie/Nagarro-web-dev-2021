let add = document.getElementById("btn");
let input = document.getElementById("input");
let list = document.getElementById("todo-list");

class Todo {
  constructor(todoItem) {
    this.createItem(todoItem);
  }
  createItem(todoItem) {
    let li = document.createElement("li");
    let bttn = document.createElement("button");
    let editBtn = document.createElement("button");
    let newDiv = document.createElement("div");
    let innerDiv = document.createElement("div");

    bttn.innerText = "delete";
    editBtn.innerText = "edit";
    editBtn.classList.add("edit");
    bttn.classList.add("del");
    bttn.id = "st";
    li.innerText = todoItem;
    innerDiv.appendChild(bttn);
    innerDiv.appendChild(editBtn);
    innerDiv.classList.add("btn-class");

    newDiv.appendChild(li);
    newDiv.appendChild(innerDiv);
    newDiv.classList.add("test");
    list.appendChild(newDiv);
    bttn.onclick = (e) => {
      newDiv.remove();
    };
    editBtn.onclick = (e) => {
      let item = li.innerText;
      input.value = item;
      newDiv.remove();
    };
    input.value = "";
  }
}

add.addEventListener("click", (e) => {
  if (input.value.length !== 0) {
    todo = new Todo(input.value);
  }
});
