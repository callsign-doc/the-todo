//for the time being removed because Uncaught SyntaxError: Cannot use import statement outside a module
import './style.css';

import * as displayController from "./displayController";
import {ToDoItem, Project, projects} from "./objects";

displayController.displayDefault();

console.log("you just reached the-todo hotline biatch...")