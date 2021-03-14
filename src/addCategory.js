import {Category} from './categoryFactory.js';
import {listOfCategories} from './categoryFactory.js';
import {assignCurrentCategory} from './addTaskFunction.js';
import { startFilter} from './categoryFilter.js';


const addCategory = function(){
    const addCategoryButton = document.querySelector('#addCategory');
    addCategoryButton.addEventListener('click', addingCategory);

    function addingCategory(){
        let categoryName = document.querySelector('#categoryName');

        if(categoryName.value != ""){
            let newCategory = new Category(categoryName.value);
            listOfCategories.push(newCategory);
            display(newCategory);
            startFilter();
            assignCurrentCategory();
        }
}

const display = function(element){
    const categoryList = document.querySelector('#categoryList');
    let myCategoryName = document.createElement('button');
    myCategoryName.classList.add('pOfCategory');
    myCategoryName.innerHTML = element.title;

    categoryList.appendChild(myCategoryName);
}
    return addingCategory
}

// const startFilter= function(){
//     //this clean the workstation
//     // let taskList = document.querySelector('#taskList');
//     // let tasks = document.getElementsByClassName('tasks');
//     // if(tasks == null){
//     //     return
//     // }else{
//     //     for (let i = (tasks.length - 1) ; i >= 0; i--) {
//     //         // if (allInputs[i].type !== "button") we will use this o check if the category is there already
//     //             tasks[i].parentNode.removeChild(tasks[i])
//     //         }
//     // }
//     //this filter the tasks
//     let categoryButtons = document.querySelectorAll('.pOfCategory');

//     const filtered = function(){
//         const tasksGeneralFiltered = tasksGeneral.filter(task => (task.category == this.innerHTML));

//         console.table(tasksGeneralFiltered);
//     }
    
//     categoryButtons.forEach(button => button.addEventListener('click', filtered));
    
//     }
    export {addCategory}
    export {listOfCategories}