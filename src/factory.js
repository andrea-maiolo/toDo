const tasksGeneral = [];

function Task(title, description, schedule, category, priority) {
    this.title = title;
    this.description = description;
    this.schedule = schedule;
    this.category = category;
    this.priority = priority;
}

function Category(title) {
    this.title = title;
}

const inbox = new Category("Inbox");

const listOfCategories = [];

listOfCategories.push(inbox);


export {Category}
export {listOfCategories}
export {tasksGeneral}
export {Task}