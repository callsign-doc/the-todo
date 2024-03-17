export {Project, ToDoItem, projects}


class Project {
    constructor(projectName, todoItems) {
        this.projectName = projectName;
        this.todoItems = todoItems;

        projects.push(this);
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }

    deleteTodoItem(todoItemIndex) {
        if (todoItemIndex >= 0 && todoItemIndex < this.todoItems.length) {
            this.todoItems.splice(todoItemIndex, 1);
        } else {
            console.error('Invalid todo item index.');
        }
    }
}


class ToDoItem {
    constructor(done, text, moreInfoText, dueDate, priority, subTextContent) {
        this.done = done; // Boolean indicating whether the todo item is done
        this.text = text; // Main text of the todo item
        this.moreInfoText = moreInfoText; // Text for the more info section
        this.dueDate = dueDate; // Due date of the todo item
        
    // Adjust priority dynamically based on its numeric value
    if (priority === 1) {
        this.priority = '⁉️';
    } else if (priority === 2) {
        this.priority = '🧀';
    } else if (priority === 3) {
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

}




// OBJECTS----------------------------
let dummyTodoItem = new ToDoItem(
    false, // done
    'Complete project', // text
    'Read documentation', // moreInfoText
    '2024-03-31', // dueDate
    1, // priority
    'Read the project documentation thoroughly before starting' // subTextContent
);
let dummyTodoItem2 = new ToDoItem(
    false, // done
    'Review project plan', // text
    'Check milestones and deadlines', // moreInfoText
    '2024-04-15', // dueDate
    2, // priority
    'Make sure to understand the project timeline and goals' // subTextContent
);


let projects = [];

let dummyProject = new Project('Dummy Project One', [dummyTodoItem,  dummyTodoItem2]);
let dummyProject2 = new Project('Dummy Project 2', [dummyTodoItem,  dummyTodoItem2, dummyTodoItem]);

console.log(projects)
// ----------------------------
