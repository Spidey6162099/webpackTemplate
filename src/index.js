import "./styles.css"; 

import {project} from './project.js';
// import {projectHolder} from './projectHolder.js'
import {todo} from "./todos.js";
import { setUpProjectForm, buttonsProjectForm } from "./modules/projectform";
import { displayProjects } from "./modules/projectrender";
import { setUpTodoForm } from "./modules/todoform";
import { displayTodos } from "./modules/todorender";
import { setupHomeAndAll } from "./modules/basicui";


let home=new project("home");
let all=new project("all");
let projects=[];


setupHomeAndAll();
setUpProjectForm();
buttonsProjectForm();

displayProjects();


setUpTodoForm();
displayTodos();

export{home,all,projects}


