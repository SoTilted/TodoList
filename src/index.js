import './style.css';
import {homeContent, projectsContent} from './DOM';
import { createTask } from './functionality';
const homeButton = document.querySelector('#home');
const projectsButton = document.querySelector('#projects');
const addTaskButton = document.querySelector('#confirmTaskBtn');
const tasksList=[];
const projectsList=[{title:'Test Project',description:'Lorem Ipsum',dueDate:'2024-03-27',tasks:'',priority:'',id:''},{title:'Test Project',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi quas, quasi asperiores totam nemo impedit ab doloribus, et magnam atque iure corporis quidem eligendi quis vero ipsum non eius.',dueDate:'2024-03-27',tasks:'',priority:'',id:''}];
let taskCounter = 0;
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

addTaskButton.addEventListener('click',(event)=>{
    event.preventDefault();
    let  allInputs = document.querySelectorAll('#Task input');
    let taskTextarea = document.querySelector('#Task textarea');
    let newTask = createTask(allInputs[0].value,allInputs[1].value,taskTextarea.value,[allInputs[2],allInputs[3],allInputs[4]].filter((element)=>{return element.checked==true})[0].id,false,'',taskCounter+'t');
    tasksList.push(newTask);
    taskCounter++;
    document.querySelector('#Task').close();
    homeContent(tasksList);
});

//change homeContent a bit to taskContent, so that i can use the function
//almost the same way for the inside of a project



































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