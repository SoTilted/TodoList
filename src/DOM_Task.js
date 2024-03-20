export default function addTaskInListDOM(element,task={title:'',description:'',priority:'',dueDate:'',id:''}){
    let listItem=document.createElement('li');
    listItem.textContent=task.title;
    listItem.id=task.id+'t';
    element.appendChild(listItem);
};

