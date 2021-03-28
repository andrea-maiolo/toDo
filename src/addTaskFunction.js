import {tasksGeneral} from './taskFactory.js';
import {Task} from './taskFactory.js';
import {getPriority} from './priorityCheck.js';
import {clearPriorityForm} from './clearPriorityForm.js';
import {currentCategory} from './assignCurrentC.js';


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
                console.log(tasksGeneral)
            }else if(currentCategory == undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, "All", pValue);
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
                console.log(tasksGeneral)
            }else if(currentCategory != undefined && pValue == undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory, "default");
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
                console.log(tasksGeneral)
            }else if(currentCategory != undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory, pValue);
                tasksGeneral.push(newTask);
                display(newTask);
                deleteTaskOnClick(newTask);
                expandeDescription();
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
            let myTaskCategory = document.createElement('p');
            myTaskCategory.classList.add('pOfTask');
            myTaskCategory.classList.add('category');
            myTaskCategory.innerHTML = element.category;
            myTaskDescription.appendChild(myTaskCategory);
        myTaskDescription.style.display="none";
        let myTaskSchedule = document.createElement('p');
        myTaskSchedule.classList.add('pOfTask');
        myTaskSchedule.innerHTML = element.schedule;
        let expandeButton = document.createElement('button');
        expandeButton.classList.add("expandeDescription");
        let iResize = document.createElement('i');
        iResize.classList.add('glyphicon');
        iResize.classList.add('glyphicon-resize-full');
        expandeButton.appendChild(iResize);
        let deleteButton = document.createElement('button');
        deleteButton.classList.add("deleteTask");
        let iDelete = document.createElement('i');
        iDelete.classList.add('glyphicon');
        iDelete.classList.add('glyphicon-trash');
        deleteButton.appendChild(iDelete);
        let modifyButton = document.createElement('button');
        modifyButton.classList.add("modifyTask")
        let iModify = document.createElement('i');
        iModify.classList.add('glyphicon');
        iModify.classList.add('glyphicon-edit');
        modifyButton.appendChild(iModify);
        let p = element.priority;
        const colorTask = (function(value){
            switch(value) {
                case "medium":
                    myTask.style.backgroundColor = "orange"
                  break;
                case "low":
                  myTask.style.backgroundColor = "yellow"
                  break;
                case "high":
                    myTask.style.backgroundColor = "red"
                    break;
                default:
                    break; 
              }
        })(p)
    
            myTask.appendChild(myTaskTitle);
            myTask.appendChild(myTaskDescription);
            myTask.appendChild(myTaskSchedule);
            myTask.appendChild(expandeButton);
            myTask.appendChild(deleteButton);
            myTask.appendChild(modifyButton);
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
                des.style.display = "none";
                this.childNodes[0].classList.remove('glyphicon-resize-small');
                this.childNodes[0].classList.add('glyphicon-resize-full');
            }else if(des.style.display == "none"){
                des.style.display = "block";
                this.childNodes[0].classList.remove('glyphicon-resize-full');
                this.childNodes[0].classList.add('glyphicon-resize-small');
            }
        } 

        expandeButtons.forEach(b => b.addEventListener('click', showMeDescription));
    }
 
export {addToList}
export {display}