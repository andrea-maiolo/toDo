import {tasksGeneral} from './taskFactory.js';
import {format, parse, compareAsc} from 'date-fns';


const sortTasks = function(){
    //DOM stuff
    const taskList = document.querySelector('#taskList');
    let allTasks = document.querySelectorAll('.tasks');
    allTasks = Array.from(allTasks);

    let m = [];
    //taking the dates from the tasks array
    let justDate = tasksGeneral.map(t => t.schedule );
    justDate.forEach(d => {
        let parsed = parse(d, 'dd/MM/yyyy', new Date());
        let a = format(parsed, 'dd/MM/yyyy');
    m.push(a)});
        
    console.log(m)
 
    let ordered = m.sort(compareAsc);
    console.table(ordered)
}

export {sortTasks}