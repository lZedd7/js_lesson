const DELETE_BTN_CLASS ='delete-btn';
const TASK_ITEM_CLASS = 'task-item';
const DONE_CLASS = 'done';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS ;

const taskInput = document.getElementById('taskNameInput');
const taskTemplate = document.getElementById('newTaskTemplate').innerHTML;
const listEl = document.getElementById('taskList');

document.getElementById('newTaskForm').addEventListener('submit', onFormSubmit);
listEl.addEventListener('click', onListClick);

function onFormSubmit(e){
    e.preventDefault();

const title = taskInput.value;
if (isValid(title)){
    addNewTask(title);
    clearInput();
} else {
    alert('task is invalid');
    }
}
function onListClick(e){
    const taskEl = getTaskElement(e.target);
    const classList = e.target.classList;
    switch(true){
        case (classList.contains(DELETE_BTN_CLASS)) : return deleteTask(taskEl); break
        case (classList.contains(TASK_ITEM_CLASS)) : return toggleTask(taskEl);  break
    }
}

function isValid(text){
    return !! text;
}
function addNewTask(title){
    const newTaskHtml = getTaskHtml(title);

    // newTaskEl.addEventListener('click', toggleTodo);
    // newTaskEl.querySelector('span').addEventListener('click', deleteTodo);

    listEl.insertAdjacentHTML('beforeend', newTaskHtml);
}
function getTaskHtml(title){
    return taskTemplate.replace('{{text}}', title);
}

function clearInput(){
    taskInput.value = '';
}
function getTaskElement(el){
    return el.closest(TASK_ITEM_SELECTOR );
}
function toggleTask(el){
    el.classList.toggle(DONE_CLASS);
}
function deleteTask(el){
    el.remove();
}