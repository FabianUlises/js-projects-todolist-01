// Selectors
const todoBtn = document.querySelector('#todo-btn');
const todoInput = document.querySelector('#task-name');
const todoCtn = document.querySelector('.todo-list');
const filterSelect = document.querySelector('#filter-todos');
// Function to save todos to localstorage
const saveLocalTodos = (todo) => {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
};
const deleteLocalTodo = (todo) => {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
// Function to add todos to localstorage
const addLocalTodos = () => {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(todo => {
        // Creating todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Creating todo li
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerText = todo;
        todoDiv.append(todoItem);
        // Check button
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = `<i class='fa-solid fa-check'></i>`
        completedBtn.classList.add('complete-btn');
        completedBtn.classList.add('todo-btn');
        // Trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
        trashBtn.classList.add('trash-btn');
        trashBtn.classList.add('todo-btn');
        // Adding items to html
        todoDiv.append(trashBtn);
        todoDiv.append(completedBtn);
        todoCtn.append(todoDiv);
    });
};
// Function to add task
const addTodo = (e) => {
    // If no input
    if(!todoInput.value){
        // Change placeholder text to 'enter a task!'
        todoInput.placeholder = 'enter a task !'
        return;
    };
    // Prevent from submitting
    // e.preventDefault();
    // Creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Creating todo li
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = todoInput.value;
    todoDiv.append(todoItem);
    // Saving todo to local storage
    saveLocalTodos(todoInput.value);
    // Check button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = `<i class='fa-solid fa-check'></i>`
    completedBtn.classList.add('complete-btn');
    completedBtn.classList.add('todo-btn');
    // Trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    trashBtn.classList.add('trash-btn');
    trashBtn.classList.add('todo-btn');
    // Adding items to html
    todoDiv.append(trashBtn);
    todoDiv.append(completedBtn);
    todoCtn.append(todoDiv);
    todoInput.value = '';
};

// Function to remove task
const deleteTodo = (e) => {
    // Setting item to equal element that was clicked
    const item = e.target;
    // If item contains classlist 'trash-btn'
    if(item.classList[0] === 'trash-btn') {
        // Selecting parent item from button (todo div) to remove
        const todo = item.parentElement;
        // Adding animation class
        todo.classList.add('fall');
        deleteLocalTodo(todo);
        // Event listener to wait for transition to end
        todo.addEventListener('transitionend', () => {
            // Remove todo after transition ends
            todo.remove();
        });
    };
    // If item contains classlist 'complete-btn'
    if(item.classList[0] === 'complete-btn') {
        // console.log('button pressed')
        // Selecting parent item from button (todo div) to add class showing completed
        const todo = item.parentElement;
        // Adding completed class
        todo.classList.toggle('completed');
    };
};

// Funciton to filter todos
// const filterTodos = (e) => {
//     const todos = todoCtn.childNodes;
//     todos.forEach(function(todo) {
//         todo.style.display ='none'
//         switch(e.target.value) {
//             case 'all':
//                 todo.style.display = 'none';
//                 break;
//             case 'completed':
//                 todo.style.display = 'flex';
//     //         case 'completed':
//     //             if(todo.classList.contains('completed')) {
//     //                 todo.style.display = 'flex';
//     //             } else {
//     //                 todo.style.display = 'none';
//     //             }
//         }
//     });
// };
// Eventlisteners
document.addEventListener('DOMContentLoaded', addLocalTodos);
todoBtn.addEventListener('click', addTodo);
todoCtn.addEventListener('click', deleteTodo);
// filterSelect.addEventListener('click', filterTodos);