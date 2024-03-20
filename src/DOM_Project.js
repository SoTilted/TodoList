export default function createProject(projectItem={title:'Title',description:'Add description here...',dueDate:'',tasks:[{title:'',description:'',priority:'',dueDate:'',id:''}],id:'0'}){
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
    content.appendChild(projectCard);
    projectCard.append(projectCardTitle,projectCardTaskList,buttonWrapper);
    projectCard.id=projectItem.id+'p';
};


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