const formDisplay = function() {
    const newTaskButton = document.querySelector('#newTaskButton');
    newTaskButton.addEventListener('click', show);

    function show() {
        let taskFormCreation = document.querySelector('.taskFormCreation');
        taskFormCreation.classList.remove('taskFormCreation-invisible')
    }

    return show
}

const clearList = function() {
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', remove);
    clearButton.addEventListener('click', clearPriorityForm)

    function remove() {
        let newTaskTitle = document.querySelector('#taskTitle');
        let newTaskDescription = document.querySelector('#taskDescription');
        let newTaskDate = document.querySelector('#taskDate');

        newTaskTitle.value = "";
        newTaskDescription.value = "";
        newTaskDate.value = "";

    }

    return remove
}

const clearPriorityForm = function(){
    let formT = document.querySelector('#newTaskForm');

    const clearPF = (function(form, name){
        let radios = form.elements[name];
        for (let i=0;i<radios.length; i++) {
            if ( radios[i].checked ) {
                radios[i].checked = false
            }
        }
    })(formT,"priority");
}

export {clearPriorityForm}
export {clearList}
export {formDisplay}