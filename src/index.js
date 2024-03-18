import './style.css';
import Project from './projects';
import createTask from './tasks'

const projectsList =[];


const example = new Project('project 1','lorem ipsum','high','today',[]);
const newTask = createTask('title','sth to do','high','tomorrow')
example.addTask(newTask);
//example.removeTask('');
console.log(example.tasks);

//try and make tasks drag and dropable
//maybe highlight the dueDates or high priority tasks
