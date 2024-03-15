export default class ToDoItem {
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
