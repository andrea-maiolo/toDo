const tasksGeneral =[];

function Task(title, description, schedule, category, priority){
    this.title = title;
    this.description = description;
    this.schedule = schedule;
    this.category = category;
    this.priority = priority;
}

export {tasksGeneral}
export {Task}