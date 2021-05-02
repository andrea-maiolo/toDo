import {formDisplay} from './formDisplay.js';
import {priorityDisplay} from './formDisplay.js';
import {addCategory} from './addCategory.js';
import {addToList} from './addTaskFunction.js';
import {clearList} from './clearTaskInputFunction.js';
import {startFilter} from './categoryFilter.js';
import {listOfCategories } from './categoryFactory.js';
import {tasksGeneral} from './taskFactory.js';
import {displayCategory} from './addCategory.js';
import {display} from './addTaskFunction.js';


formDisplay();
priorityDisplay();
addToList();
clearList();
addCategory();
startFilter();

//this will display the local TG
const displayLocalTG = function() {
    if (tasksGeneral.length > 0) {
        for (let i = 0; i < tasksGeneral.length; i++){
            display(tasksGeneral[i])
}}};

//this will check at the beginning of the file for a local saving TG
const isThereATG = (function() {
    let provisionalTG = JSON.parse(localStorage.getItem("localTG"));
    if (provisionalTG.length > 0) {
        for(let i = 0; i < provisionalTG.length; i++){
            tasksGeneral.push(provisionalTG[i]);
        }
        displayLocalTG();
    }else{return}
})();

//this will display the local LOC
const displayLocalLOC = function() {
    if (listOfCategories.length > 0) {
        for (let i = 1; i < listOfCategories.length; i++) {
            displayCategory(listOfCategories[i])
}}};

//this will check at the beginning of the file for a local saving LOC
const isThereALOC = (function() {
    let provisionalLOC = JSON.parse(localStorage.getItem("localLOC"));
    if (provisionalLOC.length > 0) {
        for(let i=1; i < provisionalLOC.length; i++){
            listOfCategories.push(provisionalLOC[i]);
        }
        displayLocalLOC();
    }else{return}
})();



