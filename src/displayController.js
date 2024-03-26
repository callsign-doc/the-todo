
import * as Objects from "./objects";


const projectsContainer = document.querySelector('.projectsContainer');

const todoDOM = document.querySelector('#toDoItem');
const moreInfoBtn = document.querySelector('.moreInfo');
const addProjectBtn = document.querySelector('#addProjectBtn');
const deleteProjectBtn = document.querySelector('#deleteProjectBtn');
const editProjectBtn = document.querySelector('#editProjectBtn');

// EVENT HANDLER ----------------------------------------
function handleAddTodo() {
    const newItem = Objects.createDefaultTodo();
    const selectedProject = Objects.getSelectedProject();
    selectedProject.addTodoItem(newItem);

    clearOutMainContainer();
    displaySelectedProject(selectedProject);
}

function handleMoreInfo(event) {
    const dataIndex = getItemIndex(event);

    const selectedProject = Objects.getSelectedProject();
    selectedProject.getTodoItem(dataIndex).toggleMoreInfo();

    updateDisplay(Objects.getSelectedProject());

    console.log(`More info button clicked for todo item with index ${dataIndex}!`);
}

function handleEditTodo(event) {
    const toDoItem = event.target.closest('#toDoItem');
    let dataIndex = getItemIndex(event)

    Objects.getSelectedProject().todoItems[dataIndex].editTodo();
    updateDisplay(Objects.getSelectedProject());
}

function handleDeleteButtonClick(event) {
    let dataIndex = getItemIndex(event)

    Objects.getSelectedProject().deleteTodoItem(dataIndex);
    updateDisplay(Objects.getSelectedProject());
}

function handleToDoTextClick(event) {
    let dataIndex = getItemIndex(event);

    Objects.getSelectedProject().getTodoItem(dataIndex).toggleDone();
    updateDisplay(Objects.getSelectedProject());
}
// ----------------------------------------




function getItemIndex(event) {
    const toDoItem = event.target.closest('#toDoItem');
    const dataIndex = parseInt(toDoItem.getAttribute('data-index'));

    return dataIndex;
}

export function displayDefault() {
    Objects.loadProjectsFromLocalStorage();
    displayAllProjects();

    console.log(`From bazinga displayDefault, getSelectedProject: ${Objects.getSelectedProject()}`);

    displaySelectedProject(Objects.getSelectedProject());

}

//MAIN LOGIC-----------
export function displayProjectTab(project, index) {
    Objects.saveProjectsToLocalStorage();

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

export function displayAllProjects() {
    // reset index
    let index = 0

    Objects.projects.forEach(project => {
        displayProjectTab(project, index);
        index += 1;
    });
}

export function displayTodoItem(todoItem, index) {

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

    toDoItem.appendChild(progressMarker);

    // Create todo text
    const toDoText = document.createElement('div');
    toDoText.id = 'toDoText';
    toDoText.textContent = todoItem.text;
    toDoItem.appendChild(toDoText);

    if (todoItem.done) {
        progressMarker.textContent = '■'
        toDoText.style.textDecoration = 'line-through';
    } else {
        progressMarker.textContent = '□';
    }

    // Create more info button
    const moreInfo = document.createElement('button');
    moreInfo.classList.add('moreInfo');
    moreInfo.textContent = 'ℹ️';
    toDoItem.appendChild(moreInfo);

    moreInfo.addEventListener('click', handleMoreInfo);


    // Create edit button
    const editButton = document.createElement('button');
    editButton.classList.add('editButton'); // You can add a class for styling if needed
    editButton.textContent = '✍️';
    toDoItem.appendChild(editButton);

    editButton.addEventListener('click', handleEditTodo);


    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = '❌';
    toDoItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', handleDeleteButtonClick);

    
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

    toDoText.addEventListener('click', handleToDoTextClick);
    

    // Get the existing main container
    const mainContainer = document.querySelector('.mainContainer');
    mainContainer.appendChild(container);
}


export function displaySelectedProject(project) {
    Objects.saveProjectsToLocalStorage();

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
    
    renderAddTodoBtn();
}

export function renderAddTodoBtn() {
    const addButton = document.createElement('button');
    addButton.classList.add('addTodoBtn');
    addButton.textContent = '[➕+]';

    const mainContainer = document.querySelector('.mainContainer');
    mainContainer.appendChild(addButton);

    // add to do functionality dummy
    addButton.addEventListener("click", handleAddTodo);
}



export function clearOutMainContainer() {
    const mainContainer = document.querySelector('.mainContainer');

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

export function clearOutProjectsTab() {
    const projectsContainer = document.querySelector('.projectsContainer');

    while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
}

export function updateDisplay(selectedProject) {
    updateProjectsTabUI();

    clearOutMainContainer();
    displaySelectedProject(Objects.getSelectedProject());
}

export function updateProjectsTabUI() {
    clearOutProjectsTab();
    displayAllProjects();

    Objects.saveProjectsToLocalStorage();
}
