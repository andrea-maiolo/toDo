import {tasksGeneral} from './taskFactory.js';

    let categoryButtons = document.querySelectorAll('.pOfCategory');
    categoryButtons.forEach(button => {button.addEventListener('click', filtered(button))});

    const filtered = function (button){
        console.log(button.innerHTML)
    };

    export {filtered}