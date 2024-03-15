//for the time being removed because Uncaught SyntaxError: Cannot use import statement outside a module
import './style.css';

import { displayProjectTab, displayAllProjects} from "./displayController";
import {ToDoItem, Project, projects} from "./objects";


displayAllProjects();


console.log("you just reached the-todo hotline...")