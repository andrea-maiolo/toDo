import {tasksGeneral} from './taskFactory.js';

const startFilter= function(){

    // let taskList = document.querySelector('#taskList');
    // let tasks = document.getElementsByClassName('tasks');
    // if(tasks == null){
    //     return
    // }else{
    //     for (let i = (tasks.length - 1) ; i >= 0; i--) {
    //         // if (allInputs[i].type !== "button") we will use this o check if the category is there already
    //             tasks[i].parentNode.removeChild(tasks[i])
    //         }
    // }
    //this filter the tasks
    let categoryButtons = document.querySelectorAll('.pOfCategory');

    const filtered = function(){
        let taskList = document.querySelector('#taskList');
        let tasks = document.getElementsByClassName('tasks');
        if(tasks == null){
            return
        }else{
            const tasksGeneralFiltered = tasksGeneral.filter(task => (task.category == this.innerHTML));
            for (let i = (tasks.length - 1) ; i >= 0; i--) {
                tasks[i].parentNode.removeChild(tasks[i])
            };
            tasksGeneralFiltered.forEach(t => taskList.appendChild(t))
            console.table(tasksGeneralFiltered);       
        }
    }
    
    categoryButtons.forEach(button => button.addEventListener('click', filtered));
    
    }


    export {startFilter}