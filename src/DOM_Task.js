export default function addTaskInListDOM(element,task={title:'',description:'',priority:'',dueDate:'',id:''}){
    //create the pop-up
    let priority;
    (task.priority==true)?priority='High':priority='Low';
    let spanPopUp = `<span class='popup' id='s${task.id}'><h3>${task.title}</h3><p>Due Date: ${task.dueDate}</p><p>${task.description}</p><p>Priority: ${priority}</p></span>`
    
    let allTasksList = document.querySelector('#p0 ul');
    let listItem=document.createElement('li');
    listItem.innerHTML=task.title + spanPopUp ;
    listItem.id='t'+task.id;
    element.appendChild(listItem);
    //making a copy to the all tasks list 
   if (allTasksList!=element){
        let copiedNode = listItem.cloneNode(true);
        allTasksList.appendChild(copiedNode);
        copiedNode.id=copiedNode.id+'-copy';
        copiedNode.lastChild.id=copiedNode.lastChild.id+'-copy';
        copiedNode.addEventListener('mouseenter',showPopUp);
        copiedNode.addEventListener('mouseleave',hidePopUp);
   }
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