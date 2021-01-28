let tasks =[];

function Task(title, description, schedule){
    this.title = title;
    this.description = description;
    this.schedule = schedule;
}

let t1 = new Task('first task', 'this is a test', 10);
tasks.push(t1);

export {tasks}
export {Task}