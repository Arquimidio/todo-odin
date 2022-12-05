import Project from "./Project";
import Task from "./Task";

const DEFAULT_PROJECTS = ['all', 'daily', 'weekly'];

// A Storage object formatted to receive projects and their todo tasks
class TodoStorage {
    constructor(
        projects = DEFAULT_PROJECTS.map(proj => new Project(proj))
    ) {
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

    static _isForbiddenProject(name) {
        return DEFAULT_PROJECTS.includes(name);
    }

    static _projectAlreadyExists(name) {
        return this
            .getProjects()
            .map(proj => proj.name)
            .includes(name);
    }

    // Returns the projects list with all the todos inside, everything already parsed
    static getTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    static getProjects() {
        return this.getTodos().projects;
    }

    // Creates the todo storage if it doesn't already exists
    static initStorage() {
        if (!this.getTodos()) {
            this._setProjects();
        }
    }

    // Adds a new project or task to the storage
    static add(data, targetProject = null) {
        const currentProjects = this.getProjects();

        if(data instanceof Project) {
            console.log(this._projectAlreadyExists(data.name))
            if(!this._projectAlreadyExists(data.name)) {
                currentProjects.push(data);
            }
        } else if(data instanceof Task) {
            const targetProjectObj = currentProjects.find(project => project.name === targetProject);
            const [ allTodos ] = currentProjects;

            if(targetProjectObj && !this._isForbiddenProject(targetProject)) {
                targetProjectObj.tasks.push(data);
            }

            allTodos.tasks.push(data);
        }

        this._setProjects(currentProjects);
        return currentProjects;
    }
}