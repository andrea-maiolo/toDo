
const formDisplay = function(){
    const newTaskButton = document.querySelector('#newTaskButton');
    newTaskButton.addEventListener('click', show);

    function show(){
        let newTaskForm = document.querySelector('#newTaskForm');
        newTaskForm.style.display = 'block';
    }
    
    return show
}

export {formDisplay}