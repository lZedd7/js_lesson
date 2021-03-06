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
    if(e.target.classList.contains('delete-btn')){
        deleteTask(taskEl);
    }
    if(e.target.classList.contains('task-item')){
        toggleTask(taskEl);
    }
}

function isValid(text){
    return !! text;
}
function addNewTask(title){
    const newTaskHtml = getTaskHtml(title);

    newTaskEl.addEventListener('click', toggleTodo);
    newTaskEl.querySelector('span').addEventListener('click', deleteTodo);

    listEl.insertAdjacentHTML('beforeend', newTaskHtml);
}
function getTaskHtml(title){
    return taskTemplate.replace('{{text}}', title);
}

function clearInput(){
    taskInput.value = '';
}
function getTaskElement(el){
    return el.closest('.task-item');
}
function toggleTask(el){
    el.classList.toggle('done');
}
function deleteTask(el){
    el.remove();
}