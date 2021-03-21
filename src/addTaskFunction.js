import {tasksGeneral} from './taskFactory.js';
import {Task} from './taskFactory.js';
import {listOfCategories} from './addCategory.js';
import {getPriority} from './priorityCheck.js';
import {clearPriorityForm} from './clearPriorityForm.js';
import {colorTask} from './colorTask.js';

let currentCategory;

const assignCurrentCategory = function() {
    let lastItem = listOfCategories[listOfCategories.length - 1];
    currentCategory = lastItem.title.toLowerCase();
}

const addToList= function(){
    const addButton = document.querySelector('#addToList');
    addButton.addEventListener('click', addingTask)

    let title = document.querySelector('#taskTitle');
    let description = document.querySelector('#taskDescription');
    let schedule = document.querySelector('#taskDate');

    function addingTask() {
        if(title.value != "" && schedule.value != ""){
            let pValue = getPriority();
            if(currentCategory == undefined && pValue == undefined){
                let newTask = new Task (title.value, description.value, schedule.value, "All", "default");
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
                colorTask(newTask["priority"]);
                console.log(tasksGeneral)
            }else if(currentCategory == undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, "All", pValue);
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
                colorTask(newTask["priority"]);
                console.log(tasksGeneral)
            }else if(currentCategory != undefined && pValue == undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory, "default");
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
                colorTask(newTask["priority"]);
                console.log(tasksGeneral)
            }else if(currentCategory != undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory, pValue);
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
                colorTask(newTask["priority"]);
                console.log(tasksGeneral)
            }
        }
        clearPriorityForm()
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
        myTaskDescription.classList.add('description');
        myTaskDescription.innerHTML = element.description;
        myTaskDescription.style.display="none";
        let myTaskSchedule = document.createElement('p');
        myTaskSchedule.classList.add('pOfTask');
        myTaskSchedule.innerHTML = element.schedule;
        let expandeButton = document.createElement('button');
        expandeButton.classList.add("expandeDescription");
        expandeButton.innerHTML="<>";
        let deleteButton = document.createElement('button');
        deleteButton.classList.add("deleteTask")
        deleteButton.innerHTML="delete";
    
            myTask.appendChild(myTaskTitle);
            myTask.appendChild(myTaskDescription);
            myTask.appendChild(myTaskSchedule);
            myTask.appendChild(expandeButton);
            myTask.appendChild(deleteButton);
            taskList.appendChild(myTask);
    }

    const deleteTaskOnClick = function(ele){
        let deleteButtons = document.querySelectorAll('.deleteTask');
        const taskList =document.querySelector('#taskList');

         const getPosition= function(elementToFind, arrayElements) {
            for (let i = 0; i < arrayElements.length; i += 1) {
                if (arrayElements[i] === elementToFind) {
                    return i;
                }}}
        
                let currentId = getPosition(ele, tasksGeneral);

        const deleteTask = function(){
            taskList.removeChild(this.parentNode);
            tasksGeneral.splice(currentId, 1);
        }
        deleteButtons.forEach(b => b.addEventListener('click', deleteTask));
    }

    const expandeDescription = function(){
        let expandeButtons = document.querySelectorAll('.expandeDescription');

        const showMeDescription = function(){
            let des = this.parentNode.childNodes[1];
            if(des.style.display == "block"){
                des.style.display = "none"
            }else if(des.style.display == "none"){
                des.style.display = "block"
            }
        } 

        expandeButtons.forEach(b => b.addEventListener('click', showMeDescription));
    }
 
export {assignCurrentCategory} 
export {addToList}
export {display}