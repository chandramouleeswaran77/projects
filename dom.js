function addTodo() {
    var todoText = document.getElementById("new-todo").value;
    var dueDate = document.getElementById("due-date").value;

    if (todoText.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var todoList = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.className = "todo-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    var textSpan = document.createElement("span");
    textSpan.textContent = todoText;
    li.appendChild(textSpan);

    if (dueDate !== "") {
        var dueDateSpan = document.createElement("span");
        dueDateSpan.textContent = "Due: " + dueDate;
        dueDateSpan.className = "due-date";
        li.appendChild(dueDateSpan);
    }

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    document.getElementById("new-todo").value = "";
    document.getElementById("due-date").value = "";
}
