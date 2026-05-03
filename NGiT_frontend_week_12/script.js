// DECLARATION
const inputField = document.getElementById('todo-input');
const dateField = document.getElementById("todo-date");
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearAllBtn = document.getElementById('clearAll');


// ADD EVENT LISTENER
addBtn.addEventListener('click', function() {
    const taskText = inputField.value.trim();
    const taskDate = dateField.value;

    // Conditional statement/Validation
    if (taskText === "" || taskDate === ""){
        alert("Please enter task and date");
        return;
    }

    // Create a list item
    const listItem = document.createElement("li");

    // Task text + date
    listItem.textContent = taskText + " ----- " + taskDate;

// COMPLETE BUTTON
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", function(){
        listItem.classList.toggle("completed");
    });

// DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(){
        todoList.removeChild(listItem);
    });

    // Add buttons
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);

    // Add to list
    todoList.appendChild(listItem);

    // Clear inputs
    inputField.value = "";
    dateField.value = "";
});


// CLEAR ALL TASKS
clearAllBtn.addEventListener("click", function(){
    todoList.innerHTML = "";
});