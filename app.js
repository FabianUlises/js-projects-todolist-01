// Selectors
const todoBtn = document.querySelector('#todo-btn');
const todoInput = document.querySelector('#task-name');
const todoCtn = document.querySelector('.todo-list');
// Function to add task
const addTodo = (e) => {
    if(!todoInput.value){
        todoInput.placeholder = 'enter a task !'
        return;
    }
    // Prevent from submitting
    e.preventDefault();
    // Creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Creating todo li
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = todoInput.value;
    todoDiv.append(todoItem);
    todoCtn.append(todoDiv);
    todoInput.value = '';
};

todoBtn.addEventListener('click', addTodo)