import {tasksGeneral} from './taskFactory.js';
import {Task} from './taskFactory.js';
import {getPriority} from './priorityCheck.js';
import {clearPriorityForm} from './clearPriorityForm.js';
import {currentCategory} from './assignCurrentC.js';
import {Category} from './categoryFactory.js';
import {listOfCategories} from './categoryFactory.js';
import {displayCategory} from './addCategory.js';
import {format, parseISO} from 'date-fns';
import {startFilter} from './categoryFilter.js';


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
                let newTask = new Task (title.value, description.value, schedule.value, "Inbox", "default");
                functionOfFunctions(newTask)
            }else if(currentCategory == undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, "Inbox", pValue);
                functionOfFunctions(newTask)
            }else if(currentCategory != undefined && pValue == undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory, "default");
                functionOfFunctions(newTask)
            }else if(currentCategory != undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, currentCategory, pValue);
                functionOfFunctions(newTask)
            }
        }
        clearPriorityForm()
    }
}

const functionOfFunctions= function(element){
    tasksGeneral.push(element);
    display(element);
}


const display = function(element){
    const taskList = document.querySelector('#taskList');
    let myTask = document.createElement('div');
    myTask.classList.add('tasks');
    let myTaskTitle = document.createElement('p');
    myTaskTitle.classList.add('pOfTask');
    myTaskTitle.innerHTML = element.title;
    let myTaskDetails = document.createElement('div');
    myTaskDetails.classList.add('details');
        let myTaskDescription = document.createElement('p');
        myTaskDescription.classList.add('pOfTask');
        myTaskDescription.innerHTML = element.description;
        let myTaskCategory = document.createElement('p');
        myTaskCategory.classList.add('pOfTask');
        myTaskCategory.innerHTML = element.category;
    myTaskDetails.appendChild(myTaskDescription);
    myTaskDetails.appendChild(myTaskCategory);
    myTaskDetails.style.display="none";
    let myTaskSchedule = document.createElement('p');
    myTaskSchedule.classList.add('pOfTask');
    let d = format(parseISO(element.schedule), 'dd/MM/yyyy');
    myTaskSchedule.innerHTML = d;
    // myTaskSchedule.innerHTML = element.schedule;
    let expandeButton = document.createElement('button');
    expandeButton.classList.add("expandeDescription");
    let iResize = document.createElement('i');
    iResize.classList.add('glyphicon');
    iResize.classList.add('glyphicon-resize-full');
    expandeButton.appendChild(iResize);

    expandeButton.addEventListener('click', () => {
        if(myTaskDetails.style.display == "block"){
                myTaskDetails.style.display = "none";
                iResize.classList.remove('glyphicon-resize-small');
                iResize.classList.add('glyphicon-resize-full');
            }else if(myTaskDetails.style.display == "none"){
                myTaskDetails.style.display = "block";
                iResize.classList.remove('glyphicon-resize-full');
                iResize.classList.add('glyphicon-resize-small');
            }
    });

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("deleteTask");
    let iDelete = document.createElement('i');
    iDelete.classList.add('glyphicon');
    iDelete.classList.add('glyphicon-trash');
    deleteButton.appendChild(iDelete);

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(myTask);
        deleteTaskArray(element);
    });

    let modifyButton = document.createElement('button');
    modifyButton.classList.add("modifyTask")
    let iModify = document.createElement('i');
    iModify.classList.add('glyphicon');
    iModify.classList.add('glyphicon-edit');
    modifyButton.appendChild(iModify);

    modifyButton.addEventListener('click', () => {
            let myModificationForm = document.createElement('form');
            myModificationForm.name="modificationForm";

            let modifyTitle = document.createElement('input');
            modifyTitle.id="modifyTitle";
            let modifyDescription = document.createElement('input');
            modifyDescription.id="modifyDescription";
            let modifyCategory = document.createElement('input');
            modifyCategory.id="modifyCategory";
            let modifySchedule = document.createElement('input');
            modifySchedule.id="modifySchedule";

            modifyTitle.type = 'text';
            modifyTitle.setAttribute('maxlength', 20);
            modifyDescription.type = 'text';
            modifyDescription.setAttribute('maxlength', 140);
            modifyCategory.type = 'text';
            modifyCategory.setAttribute('maxlength', 20);
            modifySchedule.type = 'date';

            modifyTitle.value = myTaskTitle.innerHTML;
            modifyDescription.value = myTaskDescription.innerHTML;
            modifyCategory.value = myTaskCategory.innerHTML;
            modifySchedule.value = myTaskSchedule.value;
  
            myModificationForm.appendChild(modifyTitle);
            myModificationForm.appendChild(modifyDescription);
            myModificationForm.appendChild(modifyCategory);
            myModificationForm.appendChild(modifySchedule);

            let confirmButton = document.createElement('button');
            confirmButton.innerHTML ="confirm";
            confirmButton.type="button";
            myModificationForm.appendChild(confirmButton);
            let discardButton = document.createElement('button');
            discardButton.innerHTML = "discard";
            discardButton.type="button";
            myModificationForm.appendChild(discardButton);

            myTaskTitle.style.display = 'none';
            myTaskDetails.style.display = 'none';
            myTaskSchedule.style.display = 'none';
            myTask.appendChild(myModificationForm);

            let newTitle = document.querySelector('#modifyTitle');
            let newDescription = document.querySelector('#modifyDescription');
            let newCategory = document.querySelector('#modifyCategory');
            let newSchedule = document.querySelector('#modifySchedule');

            confirmButton.addEventListener('click', ()=>{
                if(newTitle.value != "" && newSchedule.value != ""){
                    myTaskTitle.innerHTML = newTitle.value;
                    myTaskSchedule.innerHTML = newSchedule.value;
                    myTaskDescription.innerHTML = newDescription.value;
                    if(newCategory.value != ""){
                        myTaskCategory.innerHTML = newCategory.value;
                    }else {
                        alert("Please enter a category, use 'Inbox' as default")
                    }

                    myTask.removeChild(myModificationForm);
                    myTaskTitle.style.display = 'block';
                    myTaskSchedule.style.display = 'block';
                }else {
                    alert('Please enter a valid date')
                }
                  modifyTasksGeneral(myTask, element);
            });

            discardButton.addEventListener('click', ()=>{
                myTask.removeChild(myModificationForm);
                myTaskTitle.style.display = 'block';
                myTaskSchedule.style.display = 'block';
            })
    });

    let checkboxDone = document.createElement('input');
    checkboxDone.type = 'checkbox';
    checkboxDone.id = "done";
    checkboxDone.addEventListener('click' , (e) => {
        let task = e.path[1];
        task.classList.toggle('checked');
        moveTaskToDone(element);
    })


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
    myTask.appendChild(myTaskDetails);
    myTask.appendChild(myTaskSchedule);
    myTask.appendChild(expandeButton);
    myTask.appendChild(modifyButton);
    myTask.appendChild(deleteButton);
    myTask.appendChild(checkboxDone);
    taskList.appendChild(myTask);

    console.log(tasksGeneral)

    }


const deleteTaskArray = function(e){
    let index  = tasksGeneral.indexOf(e);
    tasksGeneral.splice(index,1);
}

const moveTaskToDone = function(e){
    let index  = tasksGeneral.indexOf(e);
    tasksGeneral[index].category = "Done";
}

const modifyTasksGeneral = function(myTask, element){
    let i = tasksGeneral.indexOf(element);
    let currentOBJ = tasksGeneral[i];
    let objTitle = myTask.childNodes[0].innerHTML;
    let objSchedule = myTask.childNodes[2].innerHTML;
    let objDescription = myTask.childNodes[1].childNodes[0].innerHTML;
    let objCategory = myTask.childNodes[1].childNodes[1].innerHTML;

    if(objTitle != currentOBJ.title){
        currentOBJ.title = objTitle;
    }
    if(objSchedule != currentOBJ.schedule){
        currentOBJ.schedule = objSchedule;
    }
    if(objDescription != currentOBJ.description){
        currentOBJ.description = objDescription;
    }
    if(objCategory != currentOBJ.category){
        currentOBJ.category = objCategory;
        let control =0; 
        for(let i=0; i<listOfCategories.length; i++){
            if( currentOBJ.category == listOfCategories[i].title){
                return
            }else{control++}
        }
        if(control == listOfCategories.length){
                let newCategory = new Category (currentOBJ.category)
                listOfCategories.push(newCategory);
                displayCategory(newCategory);
                startFilter();
        }
    }
    console.log(tasksGeneral)
}

 
export {addToList}
export {display}