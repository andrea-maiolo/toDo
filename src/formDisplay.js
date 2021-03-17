
const formDisplay = function(){
    const newTaskButton = document.querySelector('#newTaskButton');
    newTaskButton.addEventListener('click', show);

    function show(){
        let newTaskForm = document.querySelector('#newTaskForm');
        newTaskForm.style.display = 'block';
        newTaskButton.style.display = 'none';
    }
    
    return show
}

const priorityDisplay = function(){
    const addPButton = document.querySelector('#addPriority');
    addPButton.addEventListener('click', p);

    function p(){
        let priorityForm = document.querySelectorAll('.priorityForm');
        priorityForm.forEach(e=> e.style.display ='block')
        addPButton.style.display='none';
    }
}

export {formDisplay}
export {priorityDisplay}