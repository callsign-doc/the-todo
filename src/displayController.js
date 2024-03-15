export {displayProjectTab as createProjectTab}
import ToDoItem from "./objects";

function displayProjectTab(projectName) {
    // Create a new div element
    var projectDiv = document.createElement("div");

    // Set attributes for the div element
    projectDiv.setAttribute("id", "projectTab");
    projectDiv.setAttribute("class", "interactive");
    projectDiv.textContent = projectName;

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



// Creating an instance of ToDoItem
let dummyTodoItem = new ToDoItem(
    false, // done
    'Complete project', // text
    'Read documentation', // moreInfoText
    '2024-03-31', // dueDate
    '!!', // priority
    'Read the project documentation thoroughly before starting' // subTextContent
);

displayTodoItem(dummyTodoItem);