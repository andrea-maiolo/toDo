import {Category} from './categoryFactory.js';
import {listOfCategories} from './categoryFactory.js';
import {assignCurrentCategory} from './assignCurrentC.js';
import {startFilter} from './categoryFilter.js';


const addCategory = function(){
    const addCategoryButton = document.querySelector('#addCategory');
    addCategoryButton.addEventListener('click', addingCategory);

    function addingCategory(){
        let categoryName = document.querySelector('#categoryName');

        if(categoryName.value != ""){
            let newCategory = new Category(categoryName.value);
            functionOfFunctionsCategory(newCategory)
        }
        categoryName.value ="";
    }
}

const functionOfFunctionsCategory = function(newCategory){
    listOfCategories.push(newCategory);
    displayCategory(newCategory);
    clean()
    startFilter();
    assignCurrentCategory();
}

const displayCategory = function(element){
    const categoryList = document.querySelector('#categoryList');
    let myCategoryName = document.createElement('button');
    myCategoryName.classList.add('pOfCategory');
    myCategoryName.innerHTML = element.title;
    categoryList.appendChild(myCategoryName);
}


const clean = function(){
    let tasks = document.getElementsByClassName('tasks');
    if(tasks == null){
        return
    }else{
        for (let i = (tasks.length - 1) ; i >= 0; i--) {
                tasks[i].parentNode.removeChild(tasks[i])
            }
    }
}

    export {addCategory}
    export {displayCategory}
