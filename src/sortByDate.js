import {tasksGeneral} from './taskFactory.js';
import {format, parseISO, compareAsc} from 'date-fns';


const sortTasks = function(){
    //DOM stuff
    let allTasks = document.querySelectorAll('.tasks');
    allTasks = Array.from(allTasks);

    //taking the dates from the tasks array
    let justDate = tasksGeneral.map(t => new Date(t.schedule));

    let sorted = justDate.sort(compareAsc);
    // console.table(sorted);

    allTasks.forEach(t => {
        t.childNodes[2].innerHTML = new Date(t.childNodes[2].innerHTML);
    })

    let a = allTasks.sort(compareAsc);
    console.log(a)
    const taskList = document.querySelector('#taskList');

}

export {sortTasks}