// Selectors
const todoBtn = document.querySelector('#todo-btn');
const todoInput = document.querySelector('#task-ame');
const todoCtn = document.querySelector('.todo-list');
// Function to add task
const addTodo = (e) => {
    // Prevent from submitting
    e.preventDefault();
    // Test console log
    console.log('button pressed');
    // Creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Creating todo li
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = 'push ups';
    todoDiv.append(todoItem);
    todoCtn.append(todoDiv);
};
todoBtn.addEventListener('click', addTodo)
