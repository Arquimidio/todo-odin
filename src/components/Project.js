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

    editTask(taskId, newData) {
        const taskIndex = this.todo.findIndex(task => task.id === taskId);
        if(taskIndex !== -1) {
            this.setTodo([
                ...this.todo.slice(0, taskIndex), 
                newData, 
                ...this.todo.slice(taskIndex + 1)
            ]);
        }
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}