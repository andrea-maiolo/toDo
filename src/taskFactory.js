let tasksGeneral =[];

function Task(title, description, schedule, categorie){
    this.title = title;
    this.description = description;
    this.schedule = schedule;
    this.categorie = "master";
}

export {tasksGeneral}
export {Task}