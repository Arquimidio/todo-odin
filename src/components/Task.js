export default class Task {
    constructor(
        title, 
        description, 
        dueDate, 
        priority, 
        notes = null, 
        isComplete = false
    ) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.isComplete = isComplete;
    }
}