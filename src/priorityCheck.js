const getPriority = function(){
    let formP = document.querySelector('#newTaskForm');
    let radioC;
    const getRadioVal = (function(form, name){
        let radios = form.elements[name];
       
        for (var i=0;i<radios.length; i++) {
            if ( radios[i].checked ) {
                radioC = radios[i].value;
                break;
            }
        }
        return radioC
    })(formP,"priority")
    return radioC
}

export {getPriority}

