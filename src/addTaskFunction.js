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
                functionOfFunctions(newTask)
            }else if(currentCategory == undefined && pValue != undefined){
                let newTask = new Task (title.value, description.value, schedule.value, "All", pValue);
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
            myTask.appendChild(modifyButton);
            myTask.appendChild(deleteButton);
            taskList.appendChild(myTask);
    }



    const functionOfFunctions= function(element){
        tasksGeneral.push(element);
                display(element);
                deleteTaskOnClick();
                modifyTaskOnClick();
                expandeDescription();
                console.log(tasksGeneral)
    }




    const deleteTaskOnClick = function(){
        let deleteButtons = document.querySelectorAll('.deleteTask');
        const taskList =document.querySelector('#taskList');

         const getPosition= function(elementToFind, arrayElements) {
            for (let i = 0; i < arrayElements.length; i++) {
                if (arrayElements[i] === elementToFind) {
                    return i;
                }}}
        
                let currentId 

        const deleteTask = function(){
            let currentEle = this.parentNode;
            currentId = getPosition(currentEle, tasksGeneral);
            taskList.removeChild(this.parentNode);
            tasksGeneral.splice(currentId, 1);
        }
        deleteButtons.forEach(b => b.addEventListener('click', deleteTask));
    }






    const modifyTaskOnClick = function(){

        let modifyButtons = document.querySelectorAll('.modifyTask');

        const modifyTask = function(){
            //select and check current text file if anything is not there you are going to have trouble.
            let currentTitle = this.parentNode.childNodes[0];
            let currentDescription = this.parentNode.childNodes[1];
            // let currentCategory = this.parentNode.childNodes[1].childNodes[1];
            let currentSchedule = this.parentNode.childNodes[3];

            //create form
            let myModificationForm = document.createElement('form');
            myModificationForm.name="modificationForm";

            let modifyTitle = document.createElement('input');
            modifyTitle.id="modifyTitle";
            let modifyDescription = document.createElement('input');
            modifyDescription.id="modifyDescription";
            // let modifyCategory = document.createElement('input');
            // modifyCategory.id="modifyCategory";
            let modifySchedule = document.createElement('input');
            modifySchedule.id="modifySchedule";
            
            modifyTitle.type = 'text';
            modifyTitle.setAttribute('maxlength', 20);
            modifyDescription.type = 'text';
            modifyDescription.setAttribute('maxlength', 50);
            // modifyCategory.type = 'text';
            // modifyCategory.setAttribute('maxlength', 20);
            modifySchedule.type = 'date';


            modifyTitle.value = currentTitle.innerHTML;
            modifyDescription.value = currentDescription.innerHTML;
            // modifyCategory.value = currentCategory.innerHTML;
            modifySchedule.value = currentSchedule.innerHTML;
  
        
            myModificationForm.appendChild(modifyTitle);
            myModificationForm.appendChild(modifyDescription);
            // myModificationForm.appendChild(modifyCategory);
            myModificationForm.appendChild(modifySchedule);


            //the confirm and delete buttons are part of the form 
            let confirmButton = document.createElement('button');
            confirmButton.innerHTML ="confirm";
            confirmButton.type="button";
            myModificationForm.appendChild(confirmButton);
            let discardButton = document.createElement('button');
            discardButton.innerHTML = "discard";
            discardButton.type="button";
            myModificationForm.appendChild(discardButton);

            //we have this so that the currentTitle becomes invisible and you can change it in the form
            currentTitle.style.display = 'none';
            currentDescription.style.display = 'none';
            // currentCategory.style.display = 'none';
            currentSchedule.style.display = 'none';
            this.parentNode.appendChild(myModificationForm);


            //you will need to select the values before using them in the form
            let newTitle = document.querySelector('#modifyTitle');
            let newDescription = document.querySelector('#modifyDescription');
            // let newCategory = document.querySelector('#modifyCategory');
            let newSchedule = document.querySelector('#modifySchedule');


            //those are the event listeners for the buttons that will work similar to the addtask function

            confirmButton.addEventListener('click', ()=>{
                if(newTitle.value != "" && newSchedule != ""){
                    currentTitle.innerHTML = newTitle.value;
                    currentSchedule.innerHTML = newSchedule.value;
                    this.parentNode.removeChild(myModificationForm);
                    currentTitle.style.display = 'block';
                    currentDescription.style.display = 'block';
                    // currentCategory.style.display = 'block';
                    currentSchedule.style.display = 'block';
                    console.log(tasksGeneral)
                }
            });

            discardButton.addEventListener('click', ()=>{
                this.parentNode.removeChild(myModificationForm);
                currentTitle.style.display = 'block';
                currentDescription.style.display = 'block';
                // currentCategory.style.display = 'block';
                currentSchedule.style.display = 'block';
            })
        }

        modifyButtons.forEach(b => b.addEventListener('click', modifyTask));
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