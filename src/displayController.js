export {displayProjectTab, displayTodoItem, displayAllProjects};
import { projects } from "./objects";

const projectsContainer = document.querySelector('.projectsContainer');
const moreInfoBtn = document.querySelector('.moreInfo');

let selectedProject = projects[0];



// EVENT LISTENERS-------------------------------
projectsContainer.addEventListener('click', function(event) {
    const clickedItem = event.target.closest('#projectTab');
    if (clickedItem) {
        const index = parseInt(clickedItem.getAttribute('data-index'), 10);

        selectedProject = projects[index];
        // alert(selectedProject.projectName);
        
        clearOutMainContainer();
        displaySelectedProject(selectedProject);
    }
});


//-------------------------------



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
    const moreInfo = document.createElement('button');
    moreInfo.classList.add('moreInfo');
    moreInfo.textContent = 'ℹ️';
    toDoItem.appendChild(moreInfo);

    moreInfo.addEventListener('click', function() {
        // Retrieve the data-index attribute from the parent todo item
        let dataIndex = parseInt(toDoItem.getAttribute('data-index'));
        selectedProject.todoItems[dataIndex].toggleMoreInfo();

        clearOutMainContainer();
        displaySelectedProject(selectedProject);

        // Use the retrieved index as needed
        console.log(`More info button clicked for todo item with index ${dataIndex}!`);
    });


    // Create edit button
    const editButton = document.createElement('button');
    editButton.classList.add('editButton'); // You can add a class for styling if needed
    editButton.textContent = '✍️';
    toDoItem.appendChild(editButton);

    // Add event listener to the edit button
    editButton.addEventListener('click', function() {
        // Retrieve the data-index attribute from the parent todo item
        let dataIndex = parseInt(toDoItem.getAttribute('data-index'));
        selectedProject.todoItems[dataIndex].editTodo();

        clearOutMainContainer();
        displaySelectedProject(selectedProject);

    });


    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = '❌';
    toDoItem.appendChild(deleteButton);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        let dataIndex = parseInt(toDoItem.getAttribute('data-index'));
        selectedProject.todoItems.splice(dataIndex, 1);

        clearOutMainContainer();
        displaySelectedProject(selectedProject);
    });


    

    
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

    if (todoItem.showMoreInfo) {
        // Create subtext
        const subText = document.createElement('div');
        subText.classList.add('subText');
        subText.textContent = todoItem.subTextContent;
        container.appendChild(subText);
    }
    

    // Get the existing main container
    const mainContainer = document.querySelector('.mainContainer');
    mainContainer.appendChild(container);
}


export function displaySelectedProject(project) {
    let itemIndex = 0;

    // Create header div
    var headerDiv = document.createElement("div");
    headerDiv.id = "mainContainerHeader";
    headerDiv.textContent = project.projectName;

    // Append header div to main container
    document.querySelector('.mainContainer').appendChild(headerDiv);

    project.todoItems.forEach(item => {
        displayTodoItem(item, itemIndex);
        itemIndex += 1;
    })
}

function clearOutMainContainer() {
    const mainContainer = document.querySelector('.mainContainer');

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

