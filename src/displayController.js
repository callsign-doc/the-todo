export {displayProjectTab, displayTodoItem, displayAllProjects};
import { projects } from "./objects";



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


function displayTodoItem(todoItem) {
    // Create elements
    const toDoContainer = document.createElement('div');
    const toDoItemElem = document.createElement('div');
    const progressMarker = document.createElement('div');
    const toDoText = document.createElement('div');
    const moreInfo = document.createElement('div');
    const todoInfoContainer = document.createElement('div');
    const dueDate = document.createElement('div');
    const priority = document.createElement('div');
    const subText = document.createElement('div');

    // Set classes and IDs
    toDoContainer.className = 'toDoContainer';
    toDoItemElem.className = 'interactive';
    toDoItemElem.id = 'toDoItem'; // Set the id for the to-do item
    progressMarker.className = 'progress-marker';
    toDoText.id = 'toDoText';
    moreInfo.className = 'moreInfo';
    todoInfoContainer.className = 'todoInfoContainer';
    dueDate.className = 'dueDate';
    priority.className = 'priority';
    subText.className = 'subText';

    // Set text content from todoItem properties
    progressMarker.textContent = todoItem.done ? 'x' : 'o';
    toDoText.textContent = todoItem.text;
    moreInfo.textContent = 'more';
    dueDate.textContent = todoItem.dueDate;
    priority.textContent = todoItem.priority;
    subText.textContent = todoItem.subTextContent;

    // Append children
    toDoContainer.appendChild(toDoItemElem);
    toDoItemElem.appendChild(progressMarker);
    toDoItemElem.appendChild(toDoText);
    toDoItemElem.appendChild(moreInfo);
    toDoItemElem.appendChild(todoInfoContainer);
    todoInfoContainer.appendChild(dueDate);
    todoInfoContainer.appendChild(priority);
    toDoContainer.appendChild(subText);

    // Find the main container and append the to-do container
    const mainContainer = document.querySelector('.mainContainer');
    if (mainContainer) {
        mainContainer.appendChild(toDoContainer);
    } else {
        console.error('Main container not found.');
    }
}




