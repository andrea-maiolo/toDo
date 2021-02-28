import {tasksGeneral} from './taskFactory.js';
import {Task} from './taskFactory.js';


const addToList = function(){
    const addButton = document.querySelector('#addToList');
    addButton.addEventListener('click', addingTask);

    let title = document.querySelector('#taskTitle');
    let description = document.querySelector('#taskDescription');
    let schedule = document.querySelector('#taskDate');

    function addingTask() {
        if(title.value != "" && schedule.value != ""){
            let newTask = new Task (title.value, description.value, schedule.value);
            tasksGeneral.push(newTask);
            display(newTask);
        }
    }
    

    let display = function(element){
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
    
        //create a button that can remove the books from libra
            myTask.appendChild(myTaskTitle);
            myTask.appendChild(myTaskDescription);
            myTask.appendChild(myTaskSchedule);
            taskList.appendChild(myTask);

            console.log(tasksGeneral)
    }

    return addingTask
}

export {addToList}