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
                console.log(tasksGeneral)
            }else if(currentCategory != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory);
                tasksGeneral.push(newTask);
                display(newTask);
                console.log(tasksGeneral)
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
    
            myTask.appendChild(myTaskTitle);
            myTask.appendChild(myTaskDescription);
            myTask.appendChild(myTaskSchedule);
            taskList.appendChild(myTask);
    }

 
export {assignCurrentCategory} 
export {addToList}
export {display}