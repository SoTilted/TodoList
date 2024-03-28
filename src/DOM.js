function homeContent(data){
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class','task-container');

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id','add-task');
    addTaskButton.textContent='+';
    addTaskButton.addEventListener('click',()=>{
        document.querySelector('dialog').setAttribute('id','Task');
        document.querySelector('dialog').showModal();
        document.querySelector('#confirmBtn').value='task';
    });
    contentDiv.append(taskContainer,addTaskButton);
    for (let task in data["tasksList"]){
        createTask(data["tasksList"],data["tasksList"][task]);
    }

};

function projectTasksContent(project,data){
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    //
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

    //create the header with a title and button to go back
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class','task-container');

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id','add-task');
    addTaskButton.textContent='+';
    addTaskButton.addEventListener('click',()=>{
        document.querySelector('dialog').setAttribute('id','Task');
        document.querySelector('#confirmBtn').textContent='Add Task';
        document.querySelector('#Task').showModal();
        document.querySelector('#confirmBtn').value=project.id;})
    contentDiv.append(headerContainer,taskContainer,addTaskButton);

    for (let task in data["tasksList"]){
        if (data["tasksList"][task].project==project.title){
            createTask(data["tasksList"],data["tasksList"][task]);
        }
    }

};

function createTask(allTasks,task){
    //
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class','task');
  
    taskDiv.setAttribute('id',`${task.id}`);
    //
    let checkboxTaskDiv = document.createElement('input');
    checkboxTaskDiv.setAttribute('type','checkbox');
    checkboxTaskDiv.setAttribute('id','completed');
    checkboxTaskDiv.setAttribute('name','completed');
   
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
    //
    let pTaskDiv = document.createElement('p');
    pTaskDiv.textContent = task.title;

    //
    let taskButtonsTaskDiv = document.createElement('div');
    taskButtonsTaskDiv.setAttribute('class','task-buttons');

    //
    let detailsTaskDiv = document.createElement('div');
    detailsTaskDiv.setAttribute('class','eye-logo');
    detailsTaskDiv.addEventListener('click',()=>{showPopUp(task)});

    //
    let dateTaskDiv = document.createElement('input');
    dateTaskDiv.setAttribute('type','date');
    dateTaskDiv.setAttribute('id','dueDate');
    dateTaskDiv.setAttribute('name','dueDate');
    dateTaskDiv.setAttribute('min','');
    dateTaskDiv.setAttribute('onfocus',"this.min=new Date().toISOString().split('T')[0]");
    dateTaskDiv.addEventListener('change',()=>{
        task.dueDate=dateTaskDiv.value;
    });
    //
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
    //
    let deleteTaskDiv = document.createElement('button');
    deleteTaskDiv.setAttribute('id','delete-task');
    deleteTaskDiv.innerHTML="&times;"
    deleteTaskDiv.addEventListener('click',()=>{
        delete allTasks[task.id];
        taskDiv.parentElement.removeChild(taskDiv);
    });
    taskButtonsTaskDiv.append(detailsTaskDiv,dateTaskDiv,toggleTaskDiv,deleteTaskDiv);
    
    taskDiv.append(checkboxTaskDiv,pTaskDiv,taskButtonsTaskDiv);
    document.querySelector('.task-container').appendChild(taskDiv);

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

    //checks statuses of the task and changes the div accordingly
    //so the changes stay even when you change pages
    if (task.completed){
        checkboxTaskDiv.checked=true;
        dateTaskDiv.style.pointerEvents='none';
        toggleTaskDiv.style.pointerEvents='none';
        taskDiv.style.opacity='0.7';
        pTaskDiv.innerHTML=`<s>${pTaskDiv.innerHTML}</s>`;
    }
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
};

function projectsContent(data){
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    const projectGrid = document.createElement('div');
    projectGrid.setAttribute('class','project-grid');

    const addProjectButton = document.createElement('button');
    addProjectButton.setAttribute('id','add-project');
    addProjectButton.textContent='+';
    addProjectButton.addEventListener('click',()=>{
        document.querySelector('dialog').setAttribute('id','Project');
        document.querySelector('#confirmBtn').textContent='Add Project';
        document.querySelector('dialog').showModal();
    })

    contentDiv.append(projectGrid,addProjectButton);
    for (let project in data["projectsList"]){
        createProject(data["projectsList"][project],data);
    }


};

function createProject(project,data){
    //
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class','project-card');
    projectDiv.setAttribute('id',`${project.id}`);
    //
    let titleProjectDiv = document.createElement('h1');
    titleProjectDiv.textContent=project.title;
    //
    let descriptionProjectDiv = document.createElement('p');
    descriptionProjectDiv.textContent = project.description;
    //
    let showTasksButtonProjectDiv = document.createElement('button');
    showTasksButtonProjectDiv.setAttribute('class','show-tasks');
    showTasksButtonProjectDiv.addEventListener('click',()=>{
        projectTasksContent(project,data);
    });

    //
    let dateProjectDiv = document.createElement('p');
    dateProjectDiv.textContent = project.dueDate;
    //
    let deleteProjectButton = document.createElement('button');
    deleteProjectButton.setAttribute('class','delete-project');
    deleteProjectButton.innerHTML = "&times;";
    deleteProjectButton.addEventListener('click',()=>{
        let deleteProjectDialog = document.querySelector('#DeleteProject');
        let confirmDeleteProjectButton = document.querySelector('#confirmDeleteProjectBtn');
        deleteProjectDialog.showModal();
        confirmDeleteProjectButton.value = project.id;
    });
    //
    projectDiv.append(titleProjectDiv,descriptionProjectDiv,showTasksButtonProjectDiv,dateProjectDiv,deleteProjectButton);

    let projectGrid = document.querySelector('.project-grid');
    projectGrid.appendChild(projectDiv);
    if(project.priority=='Low'){
        projectDiv.style.borderLeftColor = 'green';
    }
    else if (project.priority=='Medium'){
        projectDiv.style.borderLeftColor = 'orange';
    }
    else {
        projectDiv.style.borderLeftColor = 'red';
    }
};

function showPopUp(task){
    let popup = document.querySelector('.overlay');
    popup.style.visibility='visible';
    popup.innerHTML = `<div class='popup-window'><h1>${task.title}</h1>
    <p>Description: ${task.description}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Completed: ${task.completed}</p>
    <button id="exit">&times;</button></div>`
    popup.firstChild.lastChild.addEventListener('click',()=>{
        popup.style.visibility='hidden';
        popup.style.cursor='default';
    });
}

export {homeContent,projectsContent,projectTasksContent};
