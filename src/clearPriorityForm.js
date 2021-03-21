const clearPriorityForm = function(){
    let formT = document.querySelector('#newTaskForm');
    let addPriorityButton = document.querySelector('#addPriority');
    let priorityStuff = document.querySelectorAll('.priorityForm');

    const clearPF = (function(form, name){
        let radios = form.elements[name];
        for (var i=0;i<radios.length; i++) {
            if ( radios[i].checked ) {
                radios[i].removeAttribute('checked');
            }
        }
    })(formT,"priority");

    addPriorityButton.style.display = "block";
    priorityStuff.forEach(e => e.style.display ='none');
}
export {clearPriorityForm}