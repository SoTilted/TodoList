function homeContent(data){
    //clear content container
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    //create a task container
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class','task-container');
    //create a button to add tasks
    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id','add-task');
    addTaskButton.textContent='+';
    //event listener to add tasks (it sets the dialog id to task
    //so it knows we are adding a task, and sets value to task 
    //to know that it is done from the home page)
    addTaskButton.addEventListener('click',()=>{
        document.querySelector('dialog').setAttribute('id','Task');
        document.querySelector('dialog').showModal();
        document.querySelector('#confirmBtn').value='task';
    });
    //create tasks and add them to the  task container
    for (let task in data["tasksList"]){
        createTask(data,data["tasksList"][task]);
    }
    //
    contentDiv.append(taskContainer,addTaskButton);
};

function projectTasksContent(project,data){
    //clear content container
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    //create the header with a title and button to go back
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('class','project-header');
    //
    const goBackButton = document.createElement('div');
    goBackButton.setAttribute('class','eye-logo-back');
    goBackButton.addEventListener('click',()=>{projectsContent(data)});
    //
    const projectTitle = document.createElement('h1');
    projectTitle.textContent = project.title;
    if (project.priority== 'Low'){projectTitle.style.color = 'green'}
    else if (project.priority== 'Medium'){projectTitle.style.color = 'orange'}
    else {projectTitle.style.color = 'red'}
    headerContainer.append(goBackButton,projectTitle);

    //create a task container for the project tasks
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class','task-container');
    //create a button to add tasks to the project
    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id','add-task');
    addTaskButton.textContent='+';
    //create event listener that sets dialog to task and 
    //the value of the dialogs button to the projects id
    // so that it knows it is adding the task to a project and which one.
    addTaskButton.addEventListener('click',()=>{
        document.querySelector('dialog').setAttribute('id','Task');
        document.querySelector('#confirmBtn').textContent='Add Task';
        document.querySelector('#Task').showModal();
        document.querySelector('#confirmBtn').value=project.id;})
    //create and add tasks to task container
    for (let task in data["tasksList"]){
        if (data["tasksList"][task].project==project.title){
            createTask(data["tasksList"],data["tasksList"][task]);
        }
    }
    //
    contentDiv.append(headerContainer,taskContainer,addTaskButton);
};

function createTask(data,task){
    //create task element 
    let taskDiv =  taskElement(task);
    //target all elements that we will add an event listener
    let dateTaskDiv = taskDiv.querySelector('#dueDate');
    let toggleTaskDiv = taskDiv.querySelector('.tri-state-toggle');
    let pTaskDiv = taskDiv.querySelector('p');
    let detailsTaskDiv = taskDiv.querySelector('.eye-logo');
    let deleteTaskDiv = taskDiv.querySelector('#delete-task');
    let checkboxTaskDiv = taskDiv.querySelector('#completed');
    //add task to the container
    document.querySelector('.task-container').appendChild(taskDiv);
    //event listener that changes task to completed/incomplete
    checkboxTaskDiv.addEventListener('click',(element)=>{
        if (element.target.checked){
            dateTaskDiv.style.pointerEvents='none';
            toggleTaskDiv.style.pointerEvents='none';
            taskDiv.style.opacity='0.7';
            pTaskDiv.innerHTML=`<s>${pTaskDiv.innerHTML}</s>`;
            task.completed=true;
         }
        else {
            dateTaskDiv.style.pointerEvents='';
            toggleTaskDiv.style.pointerEvents='';
            taskDiv.style.opacity='1';
            pTaskDiv.innerHTML=`${pTaskDiv.innerHTML.slice(3,-4)}`;
            task.completed=false;
        }
    });
    //event listener that creates a pop up window with the details
    detailsTaskDiv.addEventListener('click',()=>{showPopUp(task)});
    //event listener that changes the date
    dateTaskDiv.addEventListener('change',()=>{
        task.dueDate=dateTaskDiv.value;
    });
    //event listener that deletes the task
    deleteTaskDiv.addEventListener('click',()=>{
        delete data['tasksList'][task.id];
        localStorage.setItem('data',JSON.stringify(data));
        taskDiv.parentElement.removeChild(taskDiv);
    });
    //eventlistener for the priority button(changes color and task priority)
    let buttons = taskDiv.getElementsByClassName("button");
    let arr = [...buttons];
    arr.forEach((element, index) => {
        element.addEventListener("click", () => {
            element.style.transition ="0.4s";
            element.style.opacity = "1";
            if (index==0){
                taskDiv.querySelector('.tri-state-toggle').style.backgroundColor='green';
                task.priority='Low';
            }
            else if (index==1){
                taskDiv.querySelector('.tri-state-toggle').style.backgroundColor='orange';
                task.priority='Medium';
            }
            else{
                taskDiv.querySelector('.tri-state-toggle').style.backgroundColor='red';
                task.priority='High';
            } 
            arr.filter(function (item) {return item != element;}).forEach((item) => {item.style.opacity = "0";});
        });
      });

    //checks if task is completed
    if (task.completed){
        checkboxTaskDiv.checked=true;
        dateTaskDiv.style.pointerEvents='none';
        toggleTaskDiv.style.pointerEvents='none';
        taskDiv.style.opacity='0.7';
        pTaskDiv.innerHTML=`<s>${pTaskDiv.innerHTML}</s>`;
    }
};

function projectsContent(data){
    //clear content container
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    //create container for the projects
    const projectGrid = document.createElement('div');
    projectGrid.setAttribute('class','project-grid');
    //create button to add projects
    const addProjectButton = document.createElement('button');
    addProjectButton.setAttribute('id','add-project');
    addProjectButton.textContent='+';
    //add event listener that changes dialog id to project so it knows
    //it is adding projects
    addProjectButton.addEventListener('click',()=>{
        document.querySelector('dialog').setAttribute('id','Project');
        document.querySelector('#confirmBtn').textContent='Add Project';
        document.querySelector('dialog').showModal();
    })
    //creates and adds projects to the project container
    for (let project in data["projectsList"]){
        createProject(data["projectsList"][project],data);
    }
    //
    contentDiv.append(projectGrid,addProjectButton);


};

function createProject(project,data){
    //create project card
    let projectDiv = projectCard(project);
    //create the grid to add the projects
    let projectGrid = document.querySelector('.project-grid');
    projectGrid.appendChild(projectDiv);
    //eventlistener to show/edit tasks
    let showTasksButton = projectDiv.querySelector('.show-tasks');
    showTasksButton.addEventListener('click',()=>{projectTasksContent(project,data);});
    //eventlistener to delete project
    let deleteProjectButton = projectDiv.querySelector('.delete-project');
    deleteProjectButton.addEventListener('click',()=>{
        let deleteProjectDialog = document.querySelector('#DeleteProject');
        let confirmDeleteProjectButton = document.querySelector('#confirmDeleteProjectBtn');
        deleteProjectDialog.showModal();
        confirmDeleteProjectButton.value = project.id;
    });

};

function showPopUp(task){
    let popup = document.querySelector('.overlay');
    popup.style.visibility='visible';
    popup.innerHTML = `<div class='popup-window'><h1>${task.title}</h1>
    <p>Description: ${task.description}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Completed: ${task.completed}</p>
    <p>Project: ${task.project}</p>
    <button id="exit">&times;</button></div>`
    popup.firstChild.lastChild.addEventListener('click',()=>{
        popup.style.visibility='hidden';
        popup.style.cursor='default';
    });
}

function projectCard(project){//project DOM element creation
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class','project-card');
    projectDiv.setAttribute('id',`${project.id}`);

    function projectCardTitle(title){
        let titleProjectDiv = document.createElement('h1');
        titleProjectDiv.textContent=title;
        return titleProjectDiv;
    }
    
    function projectCardDescription(description){
        let descriptionProjectDiv = document.createElement('p');
        descriptionProjectDiv.textContent = description;
        return descriptionProjectDiv
    };

    function projectCardShowTasksButton(){
        let showTasksButtonProjectDiv = document.createElement('button');
        showTasksButtonProjectDiv.setAttribute('class','show-tasks');
        return showTasksButtonProjectDiv;    
    }

    function projectCardDate(date){
        let dateProjectDiv = document.createElement('p');
        dateProjectDiv.textContent = date;
        return dateProjectDiv;
    }

    function projectCardDeleteButton(){
        let deleteProjectButton = document.createElement('button');
        deleteProjectButton.setAttribute('class','delete-project');
        deleteProjectButton.innerHTML = "&times;";
        return deleteProjectButton;
    }
    function setPriority(priority){
        if(priority=='Low'){
            projectDiv.style.borderLeftColor = 'green';
        }
        else if (priority=='Medium'){
            projectDiv.style.borderLeftColor = 'orange';
        }
        else {
            projectDiv.style.borderLeftColor = 'red';
        }
    };
    setPriority(project.priority);
    projectDiv.append(projectCardTitle(project.title),projectCardDescription(project.description),projectCardShowTasksButton(),projectCardDate(project.dueDate),projectCardDeleteButton());
    return projectDiv;
};

function taskElement(task){//task DOM element creation
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class','task');
    taskDiv.setAttribute('id',`${task.id}`);

    function taskElementCheckbox(){
        let checkboxTaskDiv = document.createElement('input');
        checkboxTaskDiv.setAttribute('type','checkbox');
        checkboxTaskDiv.setAttribute('id','completed');
        checkboxTaskDiv.setAttribute('name','completed');
        return checkboxTaskDiv;
    }
    function taskElementTitle(title){
        let pTaskDiv = document.createElement('p');
        pTaskDiv.textContent = title;
        return pTaskDiv;
    }

    function taskElementButtonWrapper(){
        let taskButtonsTaskDiv = document.createElement('div');
        taskButtonsTaskDiv.setAttribute('class','task-buttons');
        return taskButtonsTaskDiv;
    }
    function taskElementDetails(){
        let detailsTaskDiv = document.createElement('div');
        detailsTaskDiv.setAttribute('class','eye-logo');
        return detailsTaskDiv;
    }
    function taskElementDate(){
        let dateTaskDiv = document.createElement('input');
        dateTaskDiv.setAttribute('type','date');
        dateTaskDiv.setAttribute('id','dueDate');
        dateTaskDiv.setAttribute('name','dueDate');
        dateTaskDiv.setAttribute('min','');
        dateTaskDiv.setAttribute('onfocus',"this.min=new Date().toISOString().split('T')[0]");
        return dateTaskDiv;
    }
    function taskElementPriority(){
        let toggleTaskDiv = document.createElement('div');
        toggleTaskDiv.setAttribute('class','tri-state-toggle');
        let toggleButton1 = document.createElement('input');
        toggleButton1.setAttribute('class','button');
        toggleButton1.setAttribute('type','radio');
        toggleButton1.setAttribute('name','toggle');
        toggleButton1.setAttribute('id','one');
        let toggleButton2 = document.createElement('input');
        toggleButton2.setAttribute('class','button');
        toggleButton2.setAttribute('type','radio');
        toggleButton2.setAttribute('name','toggle');
        toggleButton2.setAttribute('id','two');
        let toggleButton3 = document.createElement('input');
        toggleButton3.setAttribute('class','button');
        toggleButton3.setAttribute('type','radio');
        toggleButton3.setAttribute('name','toggle');
        toggleButton3.setAttribute('id','three');
        toggleTaskDiv.append(toggleButton1,toggleButton2,toggleButton3);
        return toggleTaskDiv;
    }

    function taskElementDelete(){
        let deleteTaskDiv = document.createElement('button');
        deleteTaskDiv.setAttribute('id','delete-task');
        deleteTaskDiv.innerHTML="&times;"
        return deleteTaskDiv;
    }

    function setPriority(task){
        let buttons = taskDiv.getElementsByClassName("button");
        let arr = [...buttons];
        if (task.priority=='Low'){
            arr[0].style.opacity='1';
            taskDiv.querySelector('.tri-state-toggle').style.backgroundColor='green';
            arr.filter(function (item) {return item != arr[0];}).forEach((item) => {item.style.opacity = "0";});
        };
        if (task.priority=='Medium'){
            arr[1].style.opacity='1';
            taskDiv.querySelector('.tri-state-toggle').style.backgroundColor='orange';
            arr.filter(function (item) {return item != arr[1];}).forEach((item) => {item.style.opacity = "0";});
        };
        if (task.priority=='High'){
            arr[2].style.opacity='1';
            taskDiv.querySelector('.tri-state-toggle').style.backgroundColor='red';
            arr.filter(function (item) {return item != arr[2];}).forEach((item) => {item.style.opacity = "0";});
        };
    }
    let taskElementButtons = taskElementButtonWrapper();
    taskElementButtons.append(taskElementDetails(),taskElementDate(),taskElementPriority(),taskElementDelete());
    taskDiv.append(taskElementCheckbox(),taskElementTitle(task.title),taskElementButtons);
    setPriority(task);
    return taskDiv
};


export {homeContent,projectsContent,projectTasksContent};
