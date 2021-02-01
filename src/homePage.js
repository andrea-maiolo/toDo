const generateHomePage = (function(){
    const main = document.querySelector('#main');

    const header = document.createElement('header');
    header.classList.add('header');
    const h1Title = document.createElement('h1');
    h1Title.id = "title";
    h1Title.innerHTML = "TO DO's list from Andy";
    header.appendChild(h1Title);  
    main.appendChild(header);

    const aside = document.createElement('aside');
    const categories = document.createElement('h3');
    categories.innerHTML= "Categories";

    const showCategoryForm = document.createElement('button');
    showCategoryForm.type="button";
    showCategoryForm.id="showCategoryForm";
    showCategoryForm.innerHTML = "New Category";
    const categoryForm = document.createElement('form');
    categoryForm.id="categoryForm";
    const newCategory = document.createElement('input');
    newCategory.id= "categoryName";
    newCategory.type="text";
    const addCategory = document.createElement('button');
    addCategory.id="addCategory";
    addCategory.type="button";
    addCategory.innerHTML="Add";

    categoryForm.appendChild(newCategory);
    categoryForm.appendChild(addCategory);

    aside.appendChild(categories);
    aside.appendChild(showCategoryForm);
    aside.appendChild(categoryForm);
    main.appendChild(aside);

    const content = document.createElement('div');
    content.classList.add("content");

    const newTask = document.createElement('div');
    const bNew = document.createElement('button');
    bNew.innerHTML = "NEW";
    bNew.id="newTaskButton";
    bNew.type="button";
    
    const newTaskForm = document.createElement('form');
    newTaskForm.id="newTaskForm";

    const inputTitle = document.createElement('input');
    inputTitle.type="text";
    inputTitle.id="taskTitle";
    inputTitle.name="taskTitle";
    inputTitle.placeholder= "title";

    const inputDescription = document.createElement('input');
    inputDescription.type="text";
    inputDescription.id="taskDescription";
    inputDescription.name="taskDescription";
    inputDescription.placeholder= "description";

    const inputDate = document.createElement('input');
    inputDate.type="date";
    inputDate.id="taskDate";
    inputDate.name="taskDate";

    // const inputPriority = document.createElement('form');
    // inputPriority.id="taskPriority";
    // inputPriority.innerHTML = "Priority";

    // const priorityLow = document.createElement('input');
    // priorityLow.type="radio";
    // priorityLow.id="priorityLow";
    // priorityLow.name="priorityLow";
    // const labelLow = document.createElement('label');
    // labelLow.innerHTML = "low";

    // const priorityMedium = document.createElement('input');
    // priorityMedium.type="radio";
    // priorityMedium.id="priorityMedium";
    // priorityMedium.name="priorityMedium";
    // const labelMedium = document.createElement('label');
    // labelMedium.innerHTML = "medium";

    // const priorityHigh = document.createElement('input');
    // priorityHigh.type="radio";
    // priorityHigh.id="priorityHigh";
    // priorityHigh.name="priorityHigh";
    // const labelHigh = document.createElement('label');
    // labelHigh.innerHTML = "high";

    // inputPriority.appendChild(priorityLow);
    // inputPriority.appendChild(labelLow);
    // inputPriority.appendChild(priorityMedium);
    // inputPriority.appendChild(labelMedium);
    // inputPriority.appendChild(priorityHigh);
    // inputPriority.appendChild(labelHigh);

    const addButton = document.createElement('button');
    addButton.id = "addToList";
    addButton.type="button";
    addButton.classList.add('buttons');
    addButton.name="addToList";
    addButton.innerHTML = "ADD";

    const clearButton = document.createElement('button');
    clearButton.id = "clear";
    clearButton.type="button";
    clearButton.classList.add('buttons');
    clearButton.name="clear";
    clearButton.innerHTML = "CLEAR";

    newTaskForm.appendChild(inputTitle);
    newTaskForm.appendChild(inputDescription);
    newTaskForm.appendChild(inputDate);
    // newTaskForm.appendChild(inputPriority);
    newTaskForm.appendChild(addButton);
    newTaskForm.appendChild(clearButton);
    
    newTask.appendChild(bNew);
    newTask.appendChild(newTaskForm);

    content.appendChild(newTask);

    const taskList = document.createElement('div');
    taskList.id = "taskList";
    content.appendChild(taskList);

    main.appendChild(content);

})()

export {generateHomePage}
