export default class Task {
    constructor({ 
        title, 
        id = '', 
        description = '', 
        dueDate='', 
        priority='low', 
        parentProject 
    }) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = id;
        this.parentProject = parentProject;
        this.priority = priority;
    }

    updateTask(editedTask) {
        for(const prop in editedTask) {
            this[prop] = editedTask[prop];
        }
    }
}