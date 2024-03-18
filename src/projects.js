export default class Project{
    constructor (title,description,id,dueDate,tasks) {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.tasks=tasks;
        this.id=id;
    }
}
Project.prototype.addTask = function(task){this.tasks.push(task);}
Project.prototype.removeTask = function(task){ 
    let index=this.tasks.indexOf(task);
    if( index == -1){
        throw new Error('No task with that value in tasks list!');
    }
    this.tasks.splice(index,1);
}
//Project.prototype.changedueDate = function(dueDate){this.dueDate=dueDate;}

