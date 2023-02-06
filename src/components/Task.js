import Priority from "./Priority";

export default class Task {
    constructor({ 
        title, 
        id = '', 
        description = '', 
        dueDate=new Date().toISOString().split('T')[0], 
        priority= new Priority('normal'), 
        parentProject,
        done=false 
    }) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = id;
        this.parentProject = parentProject;
        this.priority = priority;
        this.done = done;
    }

    updateTask(editedTask) {
        for(const prop in editedTask) {
            this[prop] = editedTask[prop];
        }
    }
}