import {Category, listOfCategories, tasksArray, Task} from './factory.js';
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
    }

    //display category
    const displayCategory = function(element) {
        //take the sidebar
        const categoryContainer = document.querySelector('#categoryContainer');
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
        deleteCategory.addEventListener('click', () => {
            categoryContainer.removeChild(divCategory);
            deleteCategoryFunction(myCategoryName);
        });
        //appendChild
        divCategory.appendChild(deleteCategory);
        divCategory.appendChild(myCategoryName);
        categoryContainer.appendChild(divCategory);
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
        tasksArray.forEach(t => {
            if (t.category == thisCat) {
                let it = tasksArray.indexOf(t);
                tasksArray.splice(it, 1);
                movingTGIntoStorage();
            } else {
                return
            }
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
                const tasksArrayFilteredForInbox = tasksArray.filter(task => (task.category != "Done"));
                for (let i = (tasks.length - 1); i >= 0; i--) {
                    tasks[i].parentNode.removeChild(tasks[i])
                };
                tasksArrayFilteredForInbox.forEach(t => display(t));
            } else {
                const tasksArrayFiltered = tasksArray.filter(task => (task.category == this.innerHTML));
                for (let i = (tasks.length - 1); i >= 0; i--) {
                    tasks[i].parentNode.removeChild(tasks[i])
                };
                tasksArrayFiltered.forEach(t => display(t));
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
        let schedule = document.querySelector('#taskSchedule');

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
        tasksArray.push(element);
        display(element);
        movingTGIntoStorage();
    }

    //display task
    const display = function(element) {
        const taskContainer = document.querySelector('#taskContainer');
        let myTask = document.createElement('div');
        myTask.classList.add('tasks');
        let myTaskTitle = document.createElement('p');
        myTaskTitle.classList.add('pOfTask');
        myTaskTitle.classList.add('taskTitle');
        myTaskTitle.innerHTML = element.title;
        let myTaskDetails = document.createElement('div');
        myTaskDetails.classList.add('details');
        let myTaskDescription = document.createElement('p');
        myTaskDescription.classList.add('pOfTask');
        myTaskDescription.classList.add('taskDescription');
        myTaskDescription.innerHTML = element.description;
        let myTaskCategory = document.createElement('p');
        myTaskCategory.classList.add('pOfTask');
        myTaskCategory.classList.add('taskCategory');
        myTaskCategory.innerHTML = element.category;
        myTaskDetails.appendChild(myTaskDescription);
        myTaskDetails.appendChild(myTaskCategory);
        myTaskDetails.style.display = "none";
        let myTaskSchedule = document.createElement('p');
        myTaskSchedule.classList.add('pOfTask');
        myTaskSchedule.classList.add('taskSchedule');
        let d = format(parseISO(element.schedule), 'dd/MM/yyyy');
        myTaskSchedule.innerHTML = d;

        let divForButtons = document.createElement('div');
        divForButtons.classList.add('divForButtons');

        myTask.addEventListener('click', () => {
            if (myTaskDetails.style.display == "flex") {
                myTaskDetails.style.display = "none";
            } else if (myTaskDetails.style.display == "none") {
                myTaskDetails.style.display = "flex";
            }
        });

        let deleteButton = document.createElement('button');
        deleteButton.classList.add("deleteTask");
        let iDelete = document.createElement('i');
        iDelete.classList.add('glyphicon');
        iDelete.classList.add('glyphicon-trash');
        deleteButton.appendChild(iDelete);

        deleteButton.addEventListener('click', () => {
            taskContainer.removeChild(myTask);
            deleteTaskArray(element);
        });

        let modifyButton = document.createElement('button');
        modifyButton.classList.add("modifyTask")
        let iModify = document.createElement('i');
        iModify.classList.add('glyphicon');
        iModify.classList.add('glyphicon-edit');
        modifyButton.appendChild(iModify);

        modifyButton.addEventListener('click', () => {
            let modificationFormDiv = document.querySelector('.modificationFormDiv');
            modificationFormDiv.classList.remove('deactivated');
            modificationFormDiv.classList.add('active');

            //set values equal to task
            let modifyTitle = document.querySelector('#modifyTitle');
            modifyTitle.value = myTaskTitle.innerHTML;
            let modifyDescription = document.querySelector('#modifyDescription');
            modifyDescription.value = myTaskDescription.innerHTML;
            let modifyCategory = document.querySelector('#modifyCategory');
            modifyCategory.value = myTaskCategory.innerHTML;
            let modifySchedule = document.querySelector('#modifySchedule');
            let d2 = format(new Date, 'yyyy-MM-dd');
            modifySchedule.value = d2;

            //those are control values
            let newTitle = document.querySelector('#modifyTitle');
            let newDescription = document.querySelector('#modifyDescription');
            let newCategory = document.querySelector('#modifyCategory');
            let newSchedule = document.querySelector('#modifySchedule');

            //confirm button function
            let confirmButton = document.querySelector('#confirmButton');
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
                    modificationFormDiv.classList.remove('active');
                    modificationFormDiv.classList.add('deactivated');
                } else {
                    alert('Please enter a valid date')
                }
                modifytasksArray(myTask, element);
            });

            //discard button function
            let discardButton = document.querySelector('#discardButton');
            discardButton.addEventListener('click', () => {
                modificationFormDiv.classList.remove('active');
                modificationFormDiv.classList.add('deactivated');
            })
        });

        let priorityBox = document.createElement('div');
        priorityBox.classList.add('priorityBox');

        let p = element.priority;
        const colorTask = (function(value) {
            switch (value) {
                case "medium":
                    priorityBox.style.backgroundColor = "orange"
                    break;
                case "low":
                    priorityBox.style.backgroundColor = "yellow"
                    break;
                case "high":
                    priorityBox.style.backgroundColor = "red"
                    break;
                default:
                    break;
            }
        })(p)

        myTask.appendChild(priorityBox);
        myTask.appendChild(myTaskTitle);
        myTask.appendChild(myTaskDetails);
        myTask.appendChild(myTaskSchedule);
        divForButtons.appendChild(modifyButton);
        divForButtons.appendChild(deleteButton);
        myTask.appendChild(divForButtons);
        taskContainer.appendChild(myTask);

    }

    //called when deleting a task
    const deleteTaskArray = function(e) {
        let index = tasksArray.indexOf(e);
        tasksArray.splice(index, 1);
        movingTGIntoStorage();
    }

    //called on task modification
    const modifytasksArray = function(myTask, element) {
        let i = tasksArray.indexOf(element);
        let currentOBJ = tasksArray[i];
        let objTitle = myTask.childNodes[1].innerHTML;
        let objSchedule = myTask.childNodes[3].innerHTML;
        let objDescription = myTask.childNodes[2].childNodes[0].innerHTML;
        let objCategory = myTask.childNodes[2].childNodes[1].innerHTML;

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
    }


    //this is the function that moves tasksArray into localStorage
    const movingTGIntoStorage = function() {
        let tg = JSON.stringify(tasksArray);
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
    export{deleteCategoryFunction}