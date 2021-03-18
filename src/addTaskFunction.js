import {tasksGeneral} from './taskFactory.js';
import {Task} from './taskFactory.js';
import {listOfCategories} from './addCategory.js';


let currentCategory;

const assignCurrentCategory = function() {
    let lastItem = listOfCategories[listOfCategories.length - 1];
    currentCategory = lastItem.title.toLowerCase();
}

const addToList= function(){
    const addButton = document.querySelector('#addToList');
    addButton.addEventListener('click', addingTask);

    let title = document.querySelector('#taskTitle');
    let description = document.querySelector('#taskDescription');
    let schedule = document.querySelector('#taskDate');

    function addingTask() {
        if(title.value != "" && schedule.value != ""){
            if(currentCategory == undefined){
                let newTask = new Task (title.value, description.value, schedule.value, "All");
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick();
            }else if(currentCategory != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory);
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick();
            }
        }
    }
}

    const display = function(element){
        const taskList = document.querySelector('#taskList');
    
        let myTask = document.createElement('div');
        myTask.classList.add('tasks');
        let myTaskTitle = document.createElement('p');
        myTaskTitle.classList.add('pOfTask');
        myTaskTitle.innerHTML = element.title;
        let myTaskDescription = document.createElement('p');
        myTaskDescription.classList.add('pOfTask');
        myTaskDescription.innerHTML = element.description;
        let myTaskSchedule = document.createElement('p');
        myTaskSchedule.classList.add('pOfTask');
        myTaskSchedule.innerHTML = element.schedule;
        let deleteButton = document.createElement('button');
        deleteButton.id="deleteTask"
        deleteButton.innerHTML="delete";
    
            myTask.appendChild(myTaskTitle);
            myTask.appendChild(myTaskDescription);
            myTask.appendChild(myTaskSchedule);
            myTask.appendChild(deleteButton);
            taskList.appendChild(myTask);
    }

    const deleteTaskOnClick = function(){
        let deleteButtons = document.querySelector('#deleteTask');
        const taskList =document.querySelector('#taskList');

        const deleteTask = function(){
            taskList.removeChild(this.parentNode);
        };

        // deleteButtons.forEach(b => b.addEventListener('click', deleteTask));
        deleteButtons.addEventListener('click', deleteTask);


    }
 
export {assignCurrentCategory} 
export {addToList}
export {display}