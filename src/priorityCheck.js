const getPriority = function(){
    let formP = document.querySelector('#newTaskForm');

    function getRadioVal(form, name) {
        let radioC;
        let radios = form.elements[name];
       
        for (var i=0;i<radios.length; i++) {
            if ( radios[i].checked ) {
                radioC = radios[i].value;
                break;
            }
        }
        return console.log(radioC)
    }
    
    getRadioVal(formP,"priority")
}

export {getPriority}

