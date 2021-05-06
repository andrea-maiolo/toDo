import {Category, listOfCategories, tasksGeneral, Task} from './factory.js';
import {clearPriorityForm } from './DOM.js';
import {format, parseISO} from 'date-fns';
    
    //create new category
    const addCategory = function() {
        const addCategoryButton = document.querySelector('#addCategory');
        addCategoryButton.addEventListener('click', addingCategory);
    
        function addingCategory() {
            let categoryName = document.querySelector('#categoryName');
    
            if (categoryName.value != "") {
                for (let i = 0; i < listOfCategories.length; i++) {
                    if (categoryName.value == listOfCategories[i].title) {
                        alert("Please use a different category name");
                        return
                    }
                }
                let newCategory = new Category(categoryName.value);
                functionOfFunctionsCategory(newCategory);
            } else {
                alert("Please enter a value")
            }
            categoryName.value = "";
        }
    }
    
    //activate whne category is created
    const functionOfFunctionsCategory = function(newCategory) {
        listOfCategories.push(newCategory);
        displayCategory(newCategory);
        clean()
        startFilter();
        assignCurrentCategory();
        movingLOCIntoStorage();
        console.log(listOfCategories)
    }
    
    //display category
    const displayCategory = function(element) {
        //take the sidebar
        const categoryList = document.querySelector('#categoryList');
        //create div for the category
        let divCategory = document.createElement('div');
        divCategory.classList.add('divCategory');
        //create category name
        let myCategoryName = document.createElement('button');
        myCategoryName.classList.add('pOfCategory');
        myCategoryName.innerHTML = element.title;
        //create deletion button
        let deleteCategory = document.createElement('button');
        deleteCategory.classList.add('deleteCategoryButton');
        let iDeleteCategory = document.createElement('i');
        iDeleteCategory.classList.add('glyphicon');
        iDeleteCategory.classList.add('glyphicon-trash');
        deleteCategory.appendChild(iDeleteCategory);
        deleteCategory.addEventListener('click',() => {
            categoryList.removeChild(divCategory);
            deleteCategoryFunction(myCategoryName);
        });
        //appendChild
        divCategory.appendChild(deleteCategory);
        divCategory.appendChild(myCategoryName);
        categoryList.appendChild(divCategory);
    }
    
    // clean display to show right tasks
    const clean = function() {
        let tasks = document.getElementsByClassName('tasks');
        if (tasks == null) {
            return
        } else {
            for (let i = (tasks.length - 1); i >= 0; i--) {
                tasks[i].parentNode.removeChild(tasks[i])
            }
        }
    }

    const deleteCategoryFunction = function(e) {
        let index = listOfCategories.indexOf(e);
        listOfCategories.splice(index, 1);
        let thisCat = e.innerHTML;
        tasksGeneral.forEach(t => {
            if (t.category == thisCat) {
                let it = tasksGeneral.indexOf(t);
                tasksGeneral.splice(it,1);
                movingTGIntoStorage();
            }else {return}
        })
        movingLOCIntoStorage();
    }
    
    //this is the function that moves listOfCategories into localStorage
    const movingLOCIntoStorage = function() {
        let lOC = JSON.stringify(listOfCategories);
        window.localStorage.setItem("localLOC", lOC)
    };
    
    //this is the function that check the current category
    let currentCategory;
    
    const assignCurrentCategory = function() {
        let lastItem = listOfCategories[listOfCategories.length - 1];
        currentCategory = lastItem.title;
    }
    
    //this function is called everytime a category is clicked on 
    //or added so the display shows only the tasks present in the category
    const startFilter = function() {
        let categoryButtons = document.querySelectorAll('.pOfCategory');
    
        const filtered = function() {
            let tasks = document.getElementsByClassName('tasks');
            if (tasks == null) {
                return
            } else if (this.innerHTML == "Inbox") {
                const tasksGeneralFilteredForInbox = tasksGeneral.filter(task => (task.category != "Done"));
                for (let i = (tasks.length - 1); i >= 0; i--) {
                    tasks[i].parentNode.removeChild(tasks[i])
                };
                tasksGeneralFilteredForInbox.forEach(t => display(t));
            } else {
                const tasksGeneralFiltered = tasksGeneral.filter(task => (task.category == this.innerHTML));
                for (let i = (tasks.length - 1); i >= 0; i--) {
                    tasks[i].parentNode.removeChild(tasks[i])
                };
                tasksGeneralFiltered.forEach(t => display(t));
            }
        }
    
        const updateCategory = function() {
            currentCategory = this.innerHTML;
        }
    
        categoryButtons.forEach(button => button.addEventListener('click', filtered))
        categoryButtons.forEach(button => button.addEventListener('click', updateCategory))
        categoryButtons.forEach(button => button.addEventListener('click', clearPriorityForm()))
    
    }
    
    
    //***HERE START THE LOGIC FOR TASKS/
    const getPriority = function() {
        let formP = document.querySelector('#newTaskForm');
        let radioC;
        const getRadioVal = (function(form, name) {
            let radios = form.elements[name];
    
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    radioC = radios[i].value;
                    break;
                }
            }
            return radioC
        })(formP, "priority")
        return radioC
    }
    
    //create new task
    const addToList = function() {
        const addButton = document.querySelector('#addToList');
        addButton.addEventListener('click', addingTask)
    
        let title = document.querySelector('#taskTitle');
        let description = document.querySelector('#taskDescription');
        let schedule = document.querySelector('#taskDate');
    
        function addingTask() {
            if (title.value != "" && schedule.value != "") {
                let pValue = getPriority();
                if (currentCategory == undefined && pValue == undefined) {
                    let newTask = new Task(title.value, description.value, schedule.value, "Inbox", "default");
                    functionOfFunctions(newTask)
                } else if (currentCategory == undefined && pValue != undefined) {
                    let newTask = new Task(title.value, description.value, schedule.value, "Inbox", pValue);
                    functionOfFunctions(newTask)
                } else if (currentCategory != undefined && pValue == undefined) {
                    let newTask = new Task(title.value, description.value, schedule.value, currentCategory, "default");
                    functionOfFunctions(newTask)
                } else if (currentCategory != undefined && pValue != undefined) {
                    let newTask = new Task(title.value, description.value, schedule.value, currentCategory, pValue);
                    functionOfFunctions(newTask)
                }
            }
            clearPriorityForm()
        }
    }
    
    //called after task creation
    const functionOfFunctions = function(element) {
        tasksGeneral.push(element);
        display(element);
        movingTGIntoStorage();
    }
    
    //display task
    const display = function(element) {
        const taskList = document.querySelector('#taskList');
        let myTask = document.createElement('div');
        myTask.classList.add('tasks');
        let myTaskTitle = document.createElement('p');
        myTaskTitle.classList.add('pOfTask');
        myTaskTitle.innerHTML = element.title;
        let myTaskDetails = document.createElement('div');
        myTaskDetails.classList.add('details');
        let myTaskDescription = document.createElement('p');
        myTaskDescription.classList.add('pOfTask');
        myTaskDescription.innerHTML = element.description;
        let myTaskCategory = document.createElement('p');
        myTaskCategory.classList.add('pOfTask');
        myTaskCategory.innerHTML = element.category;
        myTaskDetails.appendChild(myTaskDescription);
        myTaskDetails.appendChild(myTaskCategory);
        myTaskDetails.style.display = "none";
        let myTaskSchedule = document.createElement('p');
        myTaskSchedule.classList.add('pOfTask');
        let d = format(parseISO(element.schedule), 'dd/MM/yyyy');
        myTaskSchedule.innerHTML = d;
        let expandeButton = document.createElement('button');
        expandeButton.classList.add("expandeDescription");
        let iResize = document.createElement('i');
        iResize.classList.add('glyphicon');
        iResize.classList.add('glyphicon-resize-full');
        expandeButton.appendChild(iResize);
    
        expandeButton.addEventListener('click', () => {
            if (myTaskDetails.style.display == "block") {
                myTaskDetails.style.display = "none";
                iResize.classList.remove('glyphicon-resize-small');
                iResize.classList.add('glyphicon-resize-full');
            } else if (myTaskDetails.style.display == "none") {
                myTaskDetails.style.display = "block";
                iResize.classList.remove('glyphicon-resize-full');
                iResize.classList.add('glyphicon-resize-small');
            }
        });
    
        let deleteButton = document.createElement('button');
        deleteButton.classList.add("deleteTask");
        let iDelete = document.createElement('i');
        iDelete.classList.add('glyphicon');
        iDelete.classList.add('glyphicon-trash');
        deleteButton.appendChild(iDelete);
    
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(myTask);
            deleteTaskArray(element);
        });
    
        let modifyButton = document.createElement('button');
        modifyButton.classList.add("modifyTask")
        let iModify = document.createElement('i');
        iModify.classList.add('glyphicon');
        iModify.classList.add('glyphicon-edit');
        modifyButton.appendChild(iModify);
    
        modifyButton.addEventListener('click', () => {
            let myModificationForm = document.createElement('form');
            myModificationForm.name = "modificationForm";
    
            let modifyTitle = document.createElement('input');
            modifyTitle.id = "modifyTitle";
            let modifyDescription = document.createElement('input');
            modifyDescription.id = "modifyDescription";
            let modifyCategory = document.createElement('input');
            modifyCategory.id = "modifyCategory";
            let modifySchedule = document.createElement('input');
            modifySchedule.id = "modifySchedule";
    
            modifyTitle.type = 'text';
            modifyTitle.setAttribute('maxlength', 20);
            modifyDescription.type = 'text';
            modifyDescription.setAttribute('maxlength', 140);
            modifyCategory.type = 'text';
            modifyCategory.setAttribute('maxlength', 20);
            modifySchedule.type = 'date';
    
            modifyTitle.value = myTaskTitle.innerHTML;
            modifyDescription.value = myTaskDescription.innerHTML;
            modifyCategory.value = myTaskCategory.innerHTML;
            modifySchedule.value = myTaskSchedule.value;
    
            myModificationForm.appendChild(modifyTitle);
            myModificationForm.appendChild(modifyDescription);
            myModificationForm.appendChild(modifyCategory);
            myModificationForm.appendChild(modifySchedule);
    
            let confirmButton = document.createElement('button');
            confirmButton.innerHTML = "confirm";
            confirmButton.type = "button";
            myModificationForm.appendChild(confirmButton);
            let discardButton = document.createElement('button');
            discardButton.innerHTML = "discard";
            discardButton.type = "button";
            myModificationForm.appendChild(discardButton);
    
            myTaskTitle.style.display = 'none';
            myTaskDetails.style.display = 'none';
            myTaskSchedule.style.display = 'none';
            myTask.appendChild(myModificationForm);
    
            let newTitle = document.querySelector('#modifyTitle');
            let newDescription = document.querySelector('#modifyDescription');
            let newCategory = document.querySelector('#modifyCategory');
            let newSchedule = document.querySelector('#modifySchedule');
    
            confirmButton.addEventListener('click', () => {
                if (newTitle.value != "" && newSchedule.value != "") {
                    myTaskTitle.innerHTML = newTitle.value;
                    myTaskSchedule.innerHTML = newSchedule.value;
                    myTaskDescription.innerHTML = newDescription.value;
                    if (newCategory.value != "") {
                        myTaskCategory.innerHTML = newCategory.value;
                    } else {
                        alert("Please enter a category, use 'Inbox' as default")
                    }
    
                    myTask.removeChild(myModificationForm);
                    myTaskTitle.style.display = 'block';
                    myTaskSchedule.style.display = 'block';
                } else {
                    alert('Please enter a valid date')
                }
                modifyTasksGeneral(myTask, element);
            });
    
            discardButton.addEventListener('click', () => {
                myTask.removeChild(myModificationForm);
                myTaskTitle.style.display = 'block';
                myTaskSchedule.style.display = 'block';
            })
        });
    
        let checkboxDone = document.createElement('div');
        checkboxDone.classList.add('checkbox');
        checkboxDone.addEventListener('click', () => {
            taskList.removeChild(myTask);
            deleteTaskArray(element);
        })
    
    
        let p = element.priority;
        const colorTask = (function(value) {
            switch (value) {
                case "medium":
                    myTask.style.backgroundColor = "orange"
                    break;
                case "low":
                    myTask.style.backgroundColor = "yellow"
                    break;
                case "high":
                    myTask.style.backgroundColor = "red"
                    break;
                default:
                    break;
            }
        })(p)
    
        myTask.appendChild(myTaskTitle);
        myTask.appendChild(myTaskDetails);
        myTask.appendChild(myTaskSchedule);
        myTask.appendChild(expandeButton);
        myTask.appendChild(modifyButton);
        myTask.appendChild(deleteButton);
        myTask.appendChild(checkboxDone);
        taskList.appendChild(myTask);
    
        console.log(tasksGeneral)
    
    }
    
    //called when deleting a task
    const deleteTaskArray = function(e) {
        let index = tasksGeneral.indexOf(e);
        tasksGeneral.splice(index, 1);
        movingTGIntoStorage();
    }
    
    //called on task modification
    const modifyTasksGeneral = function(myTask, element) {
        let i = tasksGeneral.indexOf(element);
        let currentOBJ = tasksGeneral[i];
        let objTitle = myTask.childNodes[0].innerHTML;
        let objSchedule = myTask.childNodes[2].innerHTML;
        let objDescription = myTask.childNodes[1].childNodes[0].innerHTML;
        let objCategory = myTask.childNodes[1].childNodes[1].innerHTML;
    
        if (objTitle != currentOBJ.title) {
            currentOBJ.title = objTitle;
        }
        if (objSchedule != currentOBJ.schedule) {
            currentOBJ.schedule = objSchedule;
        }
        if (objDescription != currentOBJ.description) {
            currentOBJ.description = objDescription;
        }
        if (objCategory != currentOBJ.category) {
            currentOBJ.category = objCategory;
            let control = 0;
            for (let i = 0; i < listOfCategories.length; i++) {
                if (currentOBJ.category == listOfCategories[i].title) {
                    return
                } else {
                    control++
                }
            }
            if (control == listOfCategories.length) {
                let newCategory = new Category(currentOBJ.category)
                listOfCategories.push(newCategory);
                displayCategory(newCategory);
                startFilter();
                movingLOCIntoStorage();
            }
        }
        movingTGIntoStorage();
        console.log(tasksGeneral)
    }
    
    
    //this is the function that moves tasksGeneral into localStorage
    const movingTGIntoStorage = function() {
        let tg = JSON.stringify(tasksGeneral);
        window.localStorage.setItem("localTG", tg)
    };
     
    export {assignCurrentCategory}
    export {currentCategory}
    export {addCategory}
    export {displayCategory}
    export {movingLOCIntoStorage}
    export {startFilter}
    export {getPriority}
    export {addToList}
    export {display}