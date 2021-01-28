import {tasks} from './taskFactory.js';
import {Task} from './taskFactory.js';
import {display} from './displayTask.js';


const addToList = function(){
    const addButton = document.querySelector('#addToList');
    addButton.addEventListener('click', addingTask);

    let title = document.querySelector('#taskTitle');
    let description = document.querySelector('#taskDescription');
    let schedule = document.querySelector('#taskDate');

    function addingTask() {
        if(title.value != "" ){
            let newTask = new Task (title.value);
            tasks.push(newTask);
            console.log(tasks)  
        }
        // if ((title.value != '' && description.value != '' && schedule.value != '')){
        //     let newTask = new Task (title.value, description.value, schedule.value);
        //     tasksList.push(newTask);
        // }
    }
    
    return addingTask
}

export {addToList}