import './style.css';
import {homeContent, projectsContent,projectTasksContent} from './DOM';
import { createTask, Project } from './functionality';

//constants (buttons that we will add event listeners)
const homeButton = document.querySelector('#home');
const projectsButton = document.querySelector('#projects');
const addButton = document.querySelector('#confirmBtn');
const deleteProjectButton = document.querySelector("#confirmDeleteProjectBtn");
const sideBarButtons = document.querySelectorAll('.side-bar > div >button');

let data = {};
let taskCounter = 0;
let projectCounter = 0;


//Event listeners
window.addEventListener('load',()=>{
    if (storageAvailable("localStorage") && JSON.parse(localStorage.getItem('data'))) {
        data=JSON.parse(localStorage.getItem('data'));
        taskCounter= JSON.parse(localStorage.getItem('taskCounter'));
        projectCounter= JSON.parse(localStorage.getItem('projectCounter'));

    } 
    else {
        data = {
            tasksList: {},
            projectsList: {}
        }
    }
    homeContent(data);
});

homeButton.addEventListener('click',()=>{
    homeContent(data);
    closeOverlay();
});

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

projectsButton.addEventListener('click',()=>{
    projectsContent(data)
    closeOverlay();
});

addButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(document.querySelector('dialog').id=='Task'){
        addTask(event);
    }
    else{
        addProject(event);
    }
    saveToStorage(data,taskCounter,projectCounter);
})

deleteProjectButton.addEventListener('click',deleteProject);
//functions called in eventlisteners
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
    saveToStorage(data,taskCounter,projectCounter);
};

//checks if there is available local storage and if there isn't, it just uses a new empty data
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}
//function that saves object to storage
function saveToStorage(data,taskCounter,projectCounter){
    localStorage.setItem('data',JSON.stringify(data));
    localStorage.setItem('taskCounter',JSON.stringify(taskCounter));
    localStorage.setItem('projectCounter',JSON.stringify(projectCounter));
};


const showOverlayButton = document.querySelector('.showOverlay');
const closeOverlayButton = document.querySelector('#close');
showOverlayButton.addEventListener('click',showOverlay);
closeOverlayButton.addEventListener('click',closeOverlay);
function showOverlay(){
    const menu = document.querySelector('.side-bar');
    menu.style.transform='translate(73%,75%)';
    menu.style.transition = 'transform .55s ease-out';
    closeOverlayButton.style.visibility='visible';
    closeOverlayButton.style.transition='opacity 1s ease';
    closeOverlayButton.style.display= 'block';
    closeOverlayButton.style.opacity='1';


};

function closeOverlay(){
    const menu = document.querySelector('.side-bar');
    menu.style.transform='translate(0%,0%)';
    menu.style.transition = 'transform .55s ease-in'; 
    closeOverlayButton.style.visibility='hidden';
    closeOverlayButton.style.opacity='0';
};