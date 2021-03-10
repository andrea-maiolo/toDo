import {Category} from './categoryFactory.js';
import {listOfCategories} from './categoryFactory.js';

let currentCategory;

const addCategory = function(){
    const addCategoryButton = document.querySelector('#addCategory');
    addCategoryButton.addEventListener('click', addingCategory);

    function addingCategory(){
        let categoryName = document.querySelector('#categoryName');

        if(categoryName.value != ""){
            let newCategory = new Category(categoryName.value);
            listOfCategories.push(newCategory);
            display(newCategory);
            cleanTasks();
            assignCurrentCategory(currentCategory);
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

const cleanTasks = function(){
    let taskList = document.querySelector('#taskList');
    let tasks = document.getElementsByClassName('tasks');
    if(tasks == null){
        return
    }else{
        for (let i = (tasks.length - 1) ; i >= 0; i--) {
            // if (allInputs[i].type !== "button") we will use this o check if the category is there already
                tasks[i].parentNode.removeChild(tasks[i])
            }
    }
}

const assignCurrentCategory = function(variable) {
    let lastItem = listOfCategories[listOfCategories.length - 1];
    variable = lastItem.title.toLowerCase();
}

    export {addCategory}
    export {currentCategory}