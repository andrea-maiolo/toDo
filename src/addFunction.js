import {tasks} from './taskFactory.js';
import {Task} from './taskFactory.js';


const addToList = function(){
    const addButton = document.querySelector('#addToList');
    addButton.addEventListener('click', add);

    let title = document.querySelector('#taskTitle');
    let description = document.querySelector('#taskDescription');
    let schedule = document.querySelector('#taskDate');

    function addingTask() {
        if ((title.value != '' && description.value != '' && schedule.value != '') {
            let newTask = new Task (title.value, description.value, schedule.value);
            tasks.push(newTask);
        }
    }
    
    return add
}

export {addToList}