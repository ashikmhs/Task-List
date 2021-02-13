//Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//Dedine event listeners
form.addEventListener('submit', addTask);

//Define functions
//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task!');
    } else{
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault() //prevent form from submeting
}