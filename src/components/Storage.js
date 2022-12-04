import Project from "./Project";
import Task from "./Task";

// A Storage object formatted to receive projects and their todo tasks
class TodoStorage {
    constructor(projects = [
        new Project('all'),
        new Project('daily'),
        new Project('weekly')
    ]) {
        this.projects = projects;
    }
}

export default class Storage {

    // Sets the projects to a new TodoStorage
    static _setProjects(projects) {
        localStorage.setItem(
            'todos',
            JSON.stringify(new TodoStorage(projects))
        )
    }

    // Returns the projects list with all the todos inside, everything already parsed
    static getTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    // Creates the todo storage if it doesn't already exists
    static initStorage() {
        if (!this.getTodos()) {
            this._setProjects();
        }
    }

    // Adds a new project or task to the storage
    static add(data, targetProject = null) {
        const currentProjects = this.getTodos().projects;

        if(data instanceof Project) {
            currentProjects.push(data);
        } else if(data instanceof Task) {
            const allTodos = currentProjects[0];

            if(targetProject) {
                currentProjects[targetProject].push(data);
            }

            allTodos.tasks.push(data);
        }

        this._setProjects(currentProjects);
        return currentProjects;
    }
}