import Project from "./Project";
import Task from "./Task";
import { 
    differenceInWeeks,
    isToday
 } from "date-fns";

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

    // Verifies if a project name is the same as the ones created by default
    static _isForbiddenProject(name) {
        return DEFAULT_PROJECTS.includes(name);
    }

    // Verifies if a task with the given name already exists
    static _taskAlreadyExists(curProjects, taskName) {
        for(const project of curProjects) {
            if(project.tasks.find(task => task.name === taskName)) {
                return true;
            }
        }

        return false
    }

    static _isDueToday({ dueDate }) {
        if(dueDate) {
            return isToday(
                dueDate
            )
        }
    }

    static _isDueThisWeek({ dueDate }) {
        if(dueDate) {
            return differenceInWeeks(
                dueDate,
                new Date()
            ) <= 1;
        }

        return false;
    }

    // Verifies if a project with the given name already exists
    static _projectAlreadyExists(name) {
        return this
            .getProjects()
            .map(proj => proj.name)
            .includes(name);
    }

    // Returns the todos item from the localStorage
    static getTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    // Returns all the projects from the localstorage
    static getProjects() {
        return this.getTodos().projects;
    }

    // Creates the todo storage if it doesn't already exists
    static initStorage() {
        if (!this.getTodos()) {
            this._setProjects();
        }
    }

    // Adds a project to the storage
    static _addProject(curProjects, project) {
        if(!this._projectAlreadyExists(project.name)) {
            curProjects.push(project);
        }
    }

    // Adds a task to a project
    static _addTask(curProjects, task, targetProject) {
        if(!this._taskAlreadyExists(curProjects, task)) {
            const targetProjectObj = curProjects.find(project => project.name === targetProject);
            const [ allTodos ] = curProjects;

            if(targetProjectObj && !this._isForbiddenProject(targetProject)) {
                targetProjectObj.tasks.push(task);
            }

            allTodos.tasks.push(task);
        }
    }

    // Adds a new project or task to the storage
    static add(data, targetProject = null) {
        const currentProjects = this.getProjects();

        if(data instanceof Project) {
            this._addProject(currentProjects, data);
        } else if(data instanceof Task) {
            this._addTask(currentProjects, data, targetProject);
        }

        this._setProjects(currentProjects);
        return currentProjects;
    }

    static editTask
}