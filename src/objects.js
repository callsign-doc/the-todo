export {Project, ToDoItem}

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoItems = [];
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


