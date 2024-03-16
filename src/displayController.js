export {displayProjectTab, displayTodoItem, displayAllProjects};
import { projects } from "./objects";

let selectedProject = projects[0];

export function displayDefault() {
    displayAllProjects();
    displaySelectedProject(selectedProject);
}

//MAIN LOGIC-----------
function displayProjectTab(project, index) {
    // Create a new div element
    var projectDiv = document.createElement("div");

    // Set attributes for the div element
    projectDiv.setAttribute("id", "projectTab");
    projectDiv.setAttribute("class", "interactive");
    projectDiv.textContent = project.projectName;

    // Set the index attribute
    projectDiv.setAttribute("data-index", index);

    // Find the projects container by class name
    var projectsContainer = document.querySelector(".projectsContainer");

    // Append the newly created div element to the projects container
    if (projectsContainer) {
        projectsContainer.appendChild(projectDiv);
        console.log('appending...')
    } else {
        console.error("Projects container not found.");
    }
}

function displayAllProjects() {
    // reset index
    let index = 0

    projects.forEach(project => {
        displayProjectTab(project, index);
        index += 1;
    });
}

function displayTodoItem(todoItem, index) {
    // Create main container
    const container = document.createElement('div');
    container.classList.add('toDoContainer');

    // Create interactive todo item
    const toDoItem = document.createElement('div');
    toDoItem.classList.add('interactive');
    toDoItem.id = 'toDoItem';
    toDoItem.setAttribute('data-index', index);

    // Create progress marker
    const progressMarker = document.createElement('div');
    progressMarker.classList.add('progress-marker');
    progressMarker.textContent = todoItem.done ? '■' : '□';
    toDoItem.appendChild(progressMarker);

    // Create todo text
    const toDoText = document.createElement('div');
    toDoText.id = 'toDoText';
    toDoText.textContent = todoItem.text;
    toDoItem.appendChild(toDoText);

    // Create more info button
    const moreInfo = document.createElement('div');
    moreInfo.classList.add('moreInfo');
    moreInfo.textContent = 'more';
    toDoItem.appendChild(moreInfo);

    // Create todo info container
    const todoInfoContainer = document.createElement('div');
    todoInfoContainer.classList.add('todoInfoContainer');

    // Create due date
    const dueDate = document.createElement('div');
    dueDate.classList.add('dueDate');
    dueDate.textContent = todoItem.dueDate;
    todoInfoContainer.appendChild(dueDate);

    // Create priority
    const priority = document.createElement('div');
    priority.classList.add('priority');
    priority.textContent = todoItem.priority;
    todoInfoContainer.appendChild(priority);

    toDoItem.appendChild(todoInfoContainer);

    container.appendChild(toDoItem);

    // Create subtext
    const subText = document.createElement('div');
    subText.classList.add('subText');
    subText.textContent = todoItem.subTextContent;
    container.appendChild(subText);

    // Get the existing main container
    const mainContainer = document.querySelector('.mainContainer');
    mainContainer.appendChild(container);
}


export function displaySelectedProject(project) {
    let index = 0;

    // Create header div
    var headerDiv = document.createElement("div");
    headerDiv.id = "mainContainerHeader";
    headerDiv.textContent = project.projectName;

    // Append header div to main container
    document.querySelector('.mainContainer').appendChild(headerDiv);

    project.todoItems.forEach(item => {
        displayTodoItem(item, index);
        index += 1;
    })
}



