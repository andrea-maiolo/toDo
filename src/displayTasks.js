import {tasksGeneral} from './taskFactory.js';


let display = function(element){
    const taskList = document.querySelector('#taskList');

    let myTask = document.createElement('div');
    myTask.classList.add('tasks');
    let myTaskTitle = document.createElement('p');
    myTaskTitle.innerHTML = element.title;
    let myTaskDescription = document.createElement('p');
    myTaskDescription.innerHTML = element.description;
    let myTaskSchedule = document.createElement('p');
    myTaskSchedule.innerHTML = element.schedule;

    //create a button that can remove the books from libra
        myTask.appendChild(myTaskTitle);
        myTask.appendChild(myTaskDescription);
        myTask.appendChild(myTaskSchedule);
        taskList.appendChild(myTask);
}

export {display}
