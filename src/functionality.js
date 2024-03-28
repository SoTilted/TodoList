function Project(title,dueDate,description,priority,completed,id){
    return {title,dueDate,description,priority,completed,id};
}


function createTask(title,dueDate,description,priority,completed,project,id){
    return {title,dueDate,description,priority,completed,project,id};
}

export {createTask, Project};




