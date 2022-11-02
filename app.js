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
    // Check button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = `<i class='fa-solid fa-check'></i>`
    completedBtn.classList.add('complete-btn');
    // Trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="fa-solid fa-trash">t</i>`
    trashBtn.classList.add('trash-btn');
    todoDiv.append(trashBtn);
    todoDiv.append(completedBtn);
    todoCtn.append(todoDiv);
    todoInput.value = '';
};
// Function to remove task
const deleteTodo = (e) => {
    const item = e.target;
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });

    };
    if(item.classList[0] === 'complete-btn') {
        // console.log('button pressed')
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    };
};
todoBtn.addEventListener('click', addTodo);
todoCtn.addEventListener('click', deleteTodo);