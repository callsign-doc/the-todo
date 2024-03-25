//for the time being removed because Uncaught SyntaxError: Cannot use import statement outside a module
import './style.css';

import * as displayController from "./displayController";
import * as Objects from "./objects";

const projectsContainer = document.querySelector('.projectsContainer');

const toDoItem = document.querySelector('#toDoItem');
const moreInfoBtn = document.querySelector('.moreInfo');
const addProjectBtn = document.querySelector('#addProjectBtn');
const deleteProjectBtn = document.querySelector('#deleteProjectBtn');
const editProjectBtn = document.querySelector('#editProjectBtn');

let selectedProject = Objects.getProjects()[0];
let selectedProjectIndex = 0;

// EVENT HANDLER
function handleProjectTabClick(event) {
    const clickedItem = event.target.closest('#projectTab');
    if (clickedItem) {
        const index = parseInt(clickedItem.getAttribute('data-index'), 10);

        Objects.setSelectedProject(index);
        // alert(`The selected project is ${Objects.getSelectedProject().projectName}`);

        selectedProject = Objects.getProjects()[index];
        
        displayController.clearOutMainContainer();
        displayController.displaySelectedProject(selectedProject);
    }
}

function addNewProjectHandler() {
    Objects.addNewProject();
    displayController.updateProjectsTabUI();
}

function deleteProjectBtnHandler() {
    Objects.deleteProject(Objects.projects, selectedProject, selectedProjectIndex);

    displayController.updateDisplay(selectedProject);

    Objects.saveProjectsToLocalStorage();
}


function editSelectedProject() {
    selectedProject.editProjectDetail();
    displayController.updateDisplay(selectedProject);
}


// EVENT LISTENER
projectsContainer.addEventListener('click', handleProjectTabClick);

addProjectBtn.addEventListener('click', addNewProjectHandler);

deleteProjectBtn.addEventListener('click', deleteProjectBtnHandler);

editProjectBtn.addEventListener('click', editSelectedProject);



// MAIN LOGIC---------------------------------------------------------
displayController.displayDefault();
