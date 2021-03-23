import {tasksGeneral} from './taskFactory.js';
import {display} from './addTaskFunction.js';
import { clearPriorityForm } from './clearPriorityForm.js';

const startFilter= function(){
    let categoryButtons = document.querySelectorAll('.pOfCategory');

    const filtered = function(){
        let tasks = document.getElementsByClassName('tasks');
        if(tasks == null){
            return
        }else if(this.innerHTML == "All"){
            for (let i = (tasks.length - 1) ; i >= 0; i--) {
                tasks[i].parentNode.removeChild(tasks[i])
            };
            tasksGeneral.forEach(t => display(t));
        }else{
            const tasksGeneralFiltered = tasksGeneral.filter(task => (task.category == this.innerHTML));
            for (let i = (tasks.length - 1) ; i >= 0; i--) {
                tasks[i].parentNode.removeChild(tasks[i])
            };
            tasksGeneralFiltered.forEach(t => display(t));
        }
    }
    
    categoryButtons.forEach(button => button.addEventListener('click', filtered))
    categoryButtons.forEach(button => button.addEventListener('click', clearPriorityForm()))
    
    }


    export {startFilter}