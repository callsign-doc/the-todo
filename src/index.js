//for the time being removed because Uncaught SyntaxError: Cannot use import statement outside a module
import './style.css';

import { displayProjectTab } from "./displayController";
import {ToDoItem, Project, projects} from "./objects";


projects.forEach(project => {
    // Call the function to display the project tab
    displayProjectTab(project);
});


console.log("you just reached the-todo hotline...")