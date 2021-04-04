const sortTasks = function(){
    const taskList = document.querySelector('#taskList');
    let allTasks = document.querySelectorAll('.tasks');
    allTasks = Array.from(allTasks);
    let arrayOfDates= []
    allTasks.forEach(t => 
        arrayOfDates.push(t.childNodes[2].innerHTML)
    );
    let ordered = arrayOfDates.sort((a,b) => a.date > b.date ? 1 : -1);
    console.table(ordered)
}

export {sortTasks}