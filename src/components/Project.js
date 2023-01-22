export default class Project {
    constructor(name, todo = []) {
        this.name = name;
        this.todo = todo;
    }

    setTodo(array) {
        this.todo = array;
    }

    getTasks() {
        return this.todo;
    }

    setTask(task) {
        this.todo.push(task);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}