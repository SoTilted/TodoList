import './style.css';
import Project from './projects';
import createTask from './tasks'
import {createProject,createProjectDefault} from './DOM_Project';
import addTaskInListDOM from './DOM_Task';

const projectsList =[];
const tasksList =[];
let projectCounter = 1;
let taskCounter = 0;

function defaultContent(){
    const defaultProject = new Project('All Tasks','','',[],'0');
    createProjectDefault(defaultProject),projectsList.push(defaultProject);
     
};


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
    let newTask = createTask(dialogTaskInputs[0].value,dialogTaskInputs[2].value,dialogTaskInputs[3].checked,dialogTaskInputs[1].value,taskCounter,false);
    let ulElement = document.getElementById(`p${element.target.parentElement.parentElement.parentElement.value}`).querySelector('ul');
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


//try and make tasks drag and dropable
//maybe highlight the dueDates or high priority tasks
//maybe adding the tasks to a completed list instead of removing them?



const dialogProjectButton = document.querySelector('#new-project');
const dialogProjectElem = document.getElementById("Project");
const confirmProjectButton = document.querySelector('#confirmProjectBtn');
const confirmTaskButton = document.querySelector('#confirmTaskBtn');


dialogProjectButton.addEventListener('click',()=>{dialogProjectElem.showModal();});

confirmProjectButton.addEventListener('click',addProjectDOM);

confirmTaskButton.addEventListener('click',addTaskDOM);

window.addEventListener('load',defaultContent);