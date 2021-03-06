import {Category} from './categoryFactory.js';
import {addToList} from './addTaskFunction.js';

const addCategory = function(){
    const addCategoryButton = document.querySelector('#addCategory');
    addCategoryButton.addEventListener('click', addingCategory);

    function addingCategory(){
        let categoryName = document.querySelector('#categoryName');

        if(categoryName.value != ""){
            let newCategory = new Category(categoryName.value);
            display(newCategory);
            cleanTasks();
            storeCategoryName(newCategory);
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
    let tasks = document.getElementsByClassName('tasks');
    if(tasks == null){
        return
    }else{
        console.log(tasks);
        for (let i = (tasks.length - 1) ; i >= 0; i--) {
            // if (allInputs[i].type !== "button") we will use this o check if the category is there already
                tasks[i].parentNode.removeChild(tasks[i])
            }
        // while(tasks[0]){
        //     taskList.removeChild(tasks)
        //     break;
        // }
    }
}

const storeCategoryName= function(name) {
    if(name.length == 0){
        console.log(storing)
    }else {
        let storing = name;
    }
    // take the category name every time one is created,
    // store it here "thisplace",
    // let "thisplace" be accessible outside of this function .
    // but non changeble ,only visible.
    // when the  function is called and there is no category then just make thisplace available
    // only when a element is given you change the category name.
}

export {storeCategoryName}
export {addCategory}