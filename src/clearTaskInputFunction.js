const clearList = function(){
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', remove);

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

export {clearList}