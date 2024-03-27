function homeContent(allTasks){
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class','task-container');

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id','add-task');
    addTaskButton.textContent='+';
    addTaskButton.addEventListener('click',()=>{document.querySelector('#Task').showModal();})
    contentDiv.append(taskContainer,addTaskButton);

    for (let task of allTasks){
        createTask(allTasks,task);
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
        allTasks.splice(allTasks.indexOf(task),1);
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




function projectsContent(allProjects){
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML='';
    const projectGrid = document.createElement('div');
    projectGrid.setAttribute('class','project-grid');

    const addProjectButton = document.createElement('button');
    addProjectButton.setAttribute('id','add-project');
    addProjectButton.textContent='+';
    addProjectButton.addEventListener('click',()=>{document.querySelector('#Project').showModal();})

    contentDiv.append(projectGrid,addProjectButton);
    for (let project of allProjects){
        createProject(project);
    }


};


function createProject(project){
    //
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class','project-card');
    //
    let titleProjectDiv = document.createElement('h1');
    titleProjectDiv.textContent=project.title;
    //
    let descriptionProjectDiv = document.createElement('p');
    descriptionProjectDiv.textContent = project.description;
    //
    let showTasksButtonProjectDiv = document.createElement('button');
    showTasksButtonProjectDiv.setAttribute('class','show-tasks');
    //
    let dateProjectDiv = document.createElement('p');
    dateProjectDiv.textContent = project.dueDate;
    //
    projectDiv.append(titleProjectDiv,descriptionProjectDiv,showTasksButtonProjectDiv,dateProjectDiv);

    let projectGrid = document.querySelector('.project-grid');
    projectGrid.appendChild(projectDiv);

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



export {homeContent,projectsContent};











































/*
function createProjectDOM(projectItem={title:'Title',description:'Add description here...',dueDate:'',tasks:[{title:'',description:'',priority:'',dueDate:'',id:''}],id:''}){
    //get the div container that will hold the projects
    const content = document.querySelector('.content');
    //create a project
    const projectCard = document.createElement('div');
    projectCard.setAttribute('class','project-card');
    //create the list of the project
    const projectCardTaskList = document.createElement('ul');

    const projectCardTitle = createTitle(projectItem.title);
    const buttonWrapper = createButtonWrapper();
    const [addTasksButton ,editButton, deleteButton] = createButtons(projectItem.id);

    //append everything correctly
    buttonWrapper.append(addTasksButton,editButton,deleteButton);
    buttonWrapper.style.visibility='hidden';
    content.appendChild(projectCard);
    projectCard.append(projectCardTitle,projectCardTaskList,buttonWrapper);
    projectCard.id='p'+projectItem.id;
    projectCard.addEventListener('click',openOverlay);
    //
    let closeButton = document.querySelector('a');
    closeButton.addEventListener('click',closeOverlay)
};




function openOverlay(element){
   let overlay=document.querySelector('.overlay');
    overlay.style.width = "100%";
    let myTarget= element.target;
    while(myTarget.className!='project-card'){
        myTarget=myTarget.parentElement;
    }
    myTarget.lastChild.style.visibility='visible';
    myTarget.removeEventListener('click',openOverlay);
    overlay.appendChild(myTarget);
    
}

function closeOverlay(){
    let overlay=document.querySelector('.overlay');
    overlay.style.width = "0%";
    overlay.lastChild.addEventListener('click',openOverlay);
    overlay.lastChild.lastChild.style.visibility='hidden';
    document.querySelector('.content').appendChild(overlay.lastChild);

}

function createTitle(title){
    //create the title of the project
    const projectCardTitle = document.createElement('h1');
    projectCardTitle.textContent = title;
    return projectCardTitle;
};

function createButtonWrapper(){
    //Create button wrapper
    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class','button-wrapper');
    return buttonWrapper;
};

function createButtons(Id){
    //Create buttons
    const dialogTaskElem = document.getElementById("Task");
    const addTasksButton = document.createElement('button');
    addTasksButton.setAttribute('id','add-task');
    addTasksButton.textContent = 'Add task';
    const editButton = document.createElement('button');
    editButton.setAttribute('id','edit');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','delete');
    deleteButton.textContent = 'Delete';
    //add eventlistener to the add task button to show the dialog
    addTasksButton.addEventListener('click',()=>{
        dialogTaskElem.value = Id;
        dialogTaskElem.showModal();
    });
    return [addTasksButton,editButton,deleteButton];
};


function createTaskDOM(element,task={title:'',description:'',priority:'',dueDate:'',id:''}){
    //create the pop-up
    let priority;
    (task.priority==true)?priority='High':priority='Low';
    let spanPopUp = `<span class='popup' id='s${task.id}'><h3>${task.title}</h3><p>Due Date: ${task.dueDate}</p><p>${task.description}</p><p>Priority: ${priority}</p></span>`
    
    let listItem=document.createElement('li');
    listItem.innerHTML=task.title + spanPopUp ;
    listItem.id='t'+task.id;
    element.appendChild(listItem);
    
    listItem.addEventListener('mouseenter',showPopUp);
    listItem.addEventListener('mouseleave',hidePopUp);

};
//not using toggle because when clicking on the li objects it reverses the order because it enters and then the mouse leaves because of the overlay without registering it;
function showPopUp(element){
    let popup = document.querySelector(`#s${element.target.id.substring(1)}`);
    popup.classList.add("show"); 
}

function hidePopUp(element){
    let popup = document.querySelector(`#s${element.target.id.substring(1)}`);
    popup.classList.remove("show");      
}

export  {createProjectDOM,createTaskDOM}
*/