export default class Task {
    constructor(
        title,  
        dueDate, 
        description,
        isComplete = false
    ) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.isComplete = isComplete;
    }
}