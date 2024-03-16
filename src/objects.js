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
        this.priority = priority; // Priority level, e.g., '!!!'
        this.subTextContent = subTextContent; // Additional description or subtext
    }

    // Method to toggle the "done" status
    toggleDone() {
        this.done = !this.done;
    }
}




// OBJECTS----------------------------
let dummyTodoItem = new ToDoItem(
    false, // done
    'Complete project', // text
    'Read documentation', // moreInfoText
    '2024-03-31', // dueDate
    '!!', // priority
    'Read the project documentation thoroughly before starting' // subTextContent
);
let dummyTodoItem2 = new ToDoItem(
    false, // done
    'Review project plan', // text
    'Check milestones and deadlines', // moreInfoText
    '2024-04-15', // dueDate
    '!', // priority
    'Make sure to understand the project timeline and goals' // subTextContent
);


let projects = [];

let dummyProject = new Project('Dummy Project One', [dummyTodoItem,  dummyTodoItem2]);
let dummyProject2 = new Project('Dummy Project 2', [dummyTodoItem,  dummyTodoItem2, dummyTodoItem]);

console.log(projects)
// ----------------------------
