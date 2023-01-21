export default class Task {
    constructor({ title, id = '', description = '', dueDate='' }) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = id;
    }
}