import {Category} from './categoryFactory.js';

const addCategory = function(){
    const addCategoryButton = document.querySelector('#addCategory');
    addCategoryButton.addEventListener('click', addingCategory);

    function addingCategory(){
        let categoryName = document.querySelector('#categoryName');

        if(categoryName.value != ""){
            let newCategory = new Category(categoryName.value);
            display(newCategory);
            cleanTasks();
        }
}

let display = function(element){
    const categoryList = document.querySelector('#categoryList');

    let myCategoryName = document.createElement('p');
    myCategoryName.classList.add('pOfCategory');
    myCategoryName.innerHTML = element.title;

    categoryList.appendChild(myCategoryName);
}

    return addingCategory
}

const cleanTasks = function(){
    let taskList = document.querySelector('#taskList');
    let tasks = document.querySelector('.tasks');
    taskList.removeChild(tasks);
}








export {addCategory}