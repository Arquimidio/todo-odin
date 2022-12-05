export default class Task {
    constructor(
        title,  
        dueDate, 
        priority = 0, 
        description,
        isComplete = false
    ) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority > 3? 3 : priority;
        this.description = description;
        this.isComplete = isComplete;
    }
}