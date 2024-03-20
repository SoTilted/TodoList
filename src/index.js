import './style.css';
import Project from './projects';
import createTask from './tasks'
import createProject from './DOM_Project';
import addTaskInListDOM from './DOM_Task';

const projectsList =[];
const tasksList =[];
let projectCounter = 1;
let taskCounter = 0;

//This will change for the 'default' project 
const example = new Project('project 1','lorem ipsum','today',[],'0');
const newTask = createTask('title','sth to do','high','tomorrow','0',false);
createProject(example),example.addTask(newTask),projectsList.push(example);




function addProjectDOM(element){
    element.preventDefault();
    let dialogProjectInputs=dialogProjectElem.getElementsByTagName('input');
    let newProject = new Project(dialogProjectInputs[0].value,dialogProjectInputs[2].value,dialogProjectInputs[1].value,[],projectCounter);
    createProject(newProject);
    projectsList.push(newProject);
    projectCounter++;
    dialogProjectElem.close();
}

function addTaskDOM(element){
    element.preventDefault();
    let dialogTaskInputs = document.querySelector('#Task').getElementsByTagName('input');
    let newTask = createTask(dialogTaskInputs[0].value,dialogTaskInputs[2].value,dialogTaskInputs[3].value,dialogTaskInputs[1].value,taskCounter,false);
    let ulElement = document.getElementById(`${element.target.parentElement.parentElement.parentElement.value}p`).querySelector('ul');
    console.log(ulElement);
    for (let targetProject of projectsList){
        if (targetProject.id == element.target.parentElement.parentElement.parentElement.value){     
            tasksList.push(newTask);
            targetProject.addTask(newTask);
            addTaskInListDOM(ulElement,newTask);
        }
    }
    taskCounter++;
    document.querySelector('#Task').close();
}


//example.removeTask('');
//console.log(example.tasks);

//try and make tasks drag and dropable
//maybe highlight the dueDates or high priority tasks
//maybe adding the tasks to a completed list instead of removing them?



const dialogProjectButton = document.querySelector('#new-project');

const dialogProjectElem = document.getElementById("Project");


const confirmProjectButton = document.querySelector('#confirmProjectBtn');
const confirmTaskButton = document.querySelector('#confirmTaskBtn');

dialogProjectButton.addEventListener('click',()=>{dialogProjectElem.showModal();});





//console.log(addTaskButton);
confirmProjectButton.addEventListener('click',addProjectDOM);

confirmTaskButton.addEventListener('click',addTaskDOM);

