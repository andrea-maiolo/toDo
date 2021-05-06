import {formDisplay, priorityDisplay, clearList} from './DOM.js';
import {listOfCategories, tasksGeneral} from './factory.js';
import {displayCategory, display, startFilter, addToList, addCategory} from './functionality.js';


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

