import './style.css';
import {homeContent, projectsContent,projectTasksContent} from './DOM';
import { createTask, Project } from './functionality';
const homeButton = document.querySelector('#home');
const projectsButton = document.querySelector('#projects');
const addButton = document.querySelector('#confirmBtn');
const deleteProjectButton = document.querySelector("#confirmDeleteProjectBtn");

const data = {
    tasksList: {},
    projectsList: {}
}

let taskCounter = 0;
let projectCounter = 0;
window.addEventListener('load',()=>{homeContent(data)});

homeButton.addEventListener('click',()=>{homeContent(data)});

const sideBarButtons = document.querySelectorAll('.side-bar > div >button');
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

projectsButton.addEventListener('click',()=>{projectsContent(data)});

addButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(document.querySelector('dialog').id=='Task'){
        addTask(event);
    }
    else{
        addProject(event);
    }
})

deleteProjectButton.addEventListener('click',deleteProject);

function addTask(event){
    event.preventDefault();
    let  allInputs = document.querySelectorAll('#Task input');
    let taskTextarea = document.querySelector('#Task textarea');
    let newTask = createTask(allInputs[0].value,allInputs[1].value,taskTextarea.value,[allInputs[2],allInputs[3],allInputs[4]].filter((element)=>{return element.checked==true})[0].id,false,'home','t'+taskCounter);
    data["tasksList"][newTask.id]=newTask;
    taskCounter++;
    document.querySelector('#Task').close();
    if(addButton.value[0]=='t'){
        homeContent(data);
    }
    else {
        for (let project in data["projectsList"]){
            if (project==addButton.value){
                data["tasksList"][newTask.id].project=data["projectsList"][project].title;
                projectTasksContent(data["projectsList"][project],data);
            }
        }
    }

}

function addProject(event){
    event.preventDefault();
    let  allInputs = document.querySelectorAll('#Project input');
    let projectTextarea = document.querySelector('#Project textarea');
    let newProject = Project(allInputs[0].value,allInputs[1].value,projectTextarea.value,[allInputs[2],allInputs[3],allInputs[4]].filter((element)=>{return element.checked==true})[0].id,false,'p'+projectCounter);
    data["projectsList"][newProject.id]=newProject;
    projectCounter++;
    document.querySelector('#Project').close();
    projectsContent(data);
}

function deleteProject(event){
    event.preventDefault();
    for( let task in data["tasksList"]){
        if (data["tasksList"][task].project==data["projectsList"][deleteProjectButton.value].title){
            delete data["tasksList"][task];
        }
    }
    delete data["projectsList"][deleteProjectButton.value];
    let projectDiv = document.querySelector(`#${deleteProjectButton.value}`)
    let deleteProjectDialog = document.querySelector('#DeleteProject');
    projectDiv.parentElement.removeChild(projectDiv);
    deleteProjectDialog.close();
}

