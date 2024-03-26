import './style.css';
import {homeContent, projectsContent} from './DOM';
const homeButton = document.querySelector('#home');
const projectsButton = document.querySelector('#projects');
const tasksList=[{title:'Hello darkness my old friend',description:'',dueDate:'',priority:'',completed:'',project:'',id:'0'},{title:'Hello darkness my new friend',description:'',dueDate:'',priority:'',completed:'',project:'',id:'1'}];
const projectsList=[];

window.addEventListener('load',()=>{homeContent(tasksList)});

homeButton.addEventListener('click',()=>{homeContent(tasksList)});

let sideBarButtons = document.querySelectorAll('.side-bar > div >button');
sideBarButtons.forEach((element) => {
    element.addEventListener('click',()=>{
        if (element.className=='current-tab'){
            return;
        }
        else{
            element.classList.remove('previous-tab');
            document.querySelector('.current-tab').classList.add('previous-tab');
            document.querySelector('.current-tab').classList.remove('current-tab');
            element.classList.add('current-tab');
        }
    });
});



projectsButton.addEventListener('click',()=>{projectsContent(projectsList)});







































/*
import './style.css';
import {Project,createTask} from './functionality';
import {createProjectDOM,createTaskDOM} from './DOM';


const projectsList =[];
const tasksList =[];
let projectCounter = 1;
let taskCounter = 0;



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
    const dialogTaskElement= document.querySelector('#Task');
    for (let targetProject of projectsList){
        if (targetProject.id == dialogTaskElement.value){     
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
*/