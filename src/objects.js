export {Project, ToDoItem, projects}
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

let todayDate = format(new Date(), "d MMMM");

class Project {
    constructor(projectName, todoItems) {
        this.projectName = projectName;
        this.todoItems = todoItems || [];

        projects.push(this);
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }

    editProjectDetail() {
        this.projectName = prompt("Project name???");
    }

    
}

function logMessage() {
    console.log('Console logger: This is JSON SPARTAAA');
}


class ToDoItem {
    constructor(done, text, moreInfoText, dueDate, priority, subTextContent) {
        this.done = done; 
        this.text = text; 
        this.moreInfoText = moreInfoText; // Text for the more info section
        this.dueDate = dueDate; // Due date of the todo item
        
    // Adjust priority dynamically based on its numeric value
    if (priority === '1') {
        this.priority = '⁉️';
    } else if (priority === '2') {
        this.priority = '🧀';
    } else if (priority === '3') {
        this.priority = '🍐';
    } else {
        // Handle other cases if needed
        this.priority = priority; // Default value if priority is not 1, 2, or 3
    }

        this.subTextContent = subTextContent; // Additional description or subtext

        this.showMoreInfo = false;
    }

    // Method to toggle the "done" status
    toggleDone() {
        this.done = !this.done;
    }

    toggleMoreInfo() {
        this.showMoreInfo = !this.showMoreInfo;
    }

    editTodo() {
        this.text = prompt('Text');
        this.subTextContent = prompt('Description');
    }


    logMessage() {
        console.log(`Logger: ${this.text}`);
    };
}

export function createDefaultTodo() {
    let item = new ToDoItem(
        false, // done
        prompt('Do what?'), // text
        'irrelevant crap', // moreInfoText
        todayDate, // dueDate
        prompt('Priority from 3 -> 1'), // priority
        prompt('Description')
    );

    return item;
}


// DEFAULT OBJECTS----------------------------
let dummyTodoItem = new ToDoItem(
    false, // done
    'Complete project', // text
    'Read documentation', // moreInfoText
    todayDate, // dueDate
    1, // priority
    'Read the project documentation thoroughly before starting' // subTextContent
);
let dummyTodoItem2 = new ToDoItem(
    false, // done
    'Review project plan', // text
    'Check milestones and deadlines', // moreInfoText
    todayDate, // dueDate
    2, // priority
    'Make sure to understand the project timeline and goals' // subTextContent
);
let dummyTodoItem3 = new ToDoItem(
    false, // done
    'Review Number 3', // text
    'Check milestones and deadlines', // moreInfoText
    todayDate, // dueDate
    2, // priority
    'Make sure to understand the project timeline and goals' // subTextContent
);


let projects = [];
const PROJECTS_KEY = 'projectsData';
const projectsData = localStorage.getItem(PROJECTS_KEY);

export function addNewProject() {
    let projectName = prompt('Project Name');
    let project = new Project(projectName, []);
}

export function deleteProject(projectsArray, selectedProject, indexToDelete) {
    projectsArray.splice(indexToDelete, 1);

    selectedProject = projects[0];
}


export function saveProjectsToLocalStorage() {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    console.log(projects)
    console.log('Saving to local storage....');
}

export function loadProjectsFromLocalStorage() {
    if (projectsData) {
        // projects = parseJSONToProjects(projectsData);
        console.log(`found projects data in local storage: ${projectsData}`)

        projects = parseJSONToProjects(projectsData);
        console.log(`${projects} from loader`)
    } else {
        console.log("Cannot find projects data");
        return null; // Handle if the array is not found in local storage
    }
}

export function parseJSONToProjects(projectsJSON) {
    let parsedProjectsArray = JSON.parse(projectsJSON);

    parsedProjectsArray.forEach(project => {
        console.log("parsing projects from local storage")
        // console.log(`Project:${project.projectName}`);
        Object.setPrototypeOf(project, new Project());

        project.todoItems.forEach(todoItem => {
            // console.log(`   Items: ${todoItem.text}`);
            Object.setPrototypeOf(todoItem, new ToDoItem());

        });
    });

    return parsedProjectsArray;
}


let dummyProject = new Project('Dummy Project One', [dummyTodoItem,  dummyTodoItem2]);

