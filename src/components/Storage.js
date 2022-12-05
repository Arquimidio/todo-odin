import Project from "./Project";
import Task from "./Task";
import { 
    differenceInWeeks,
    isToday
 } from "date-fns";

const TODAY_NAME = 'Today';
const WEEK_NAME = 'This week';
const DEFAULT_PROJECTS = ['all', TODAY_NAME, WEEK_NAME];

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

    // Verifies if a task with the given name already exists
    static _taskAlreadyExists(curProjects, taskName) {
        for(const project of curProjects) {
            if(project.tasks.find(task => task.name === taskName)) {
                return true;
            }
        }

        return false
    }

    // Verifies if the date from a task is the same as today
    static _isDueToday({ dueDate }) {
        if(dueDate) {
            return isToday(
                dueDate
            )
        }
    }

    // Verifies if the date from a task fits the current week
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
            const [ allTodos ] = curProjects;
            const targetProjectObj = curProjects.find(
                project => project.name === targetProject
            );

            if(targetProjectObj) {
                targetProjectObj.tasks.push(task);
            }

            allTodos.tasks.push(task);
        }
    }

    // Adds a task to Today project or Week Project if the due data matches
    static _addByDueDate(task) {
        if(this._isDueToday(task)) {
            this.add(task, TODAY_NAME);     
        }

        if(this._isDueThisWeek(task)) {
            this.add(task, WEEK_NAME);
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

    static _editTask(newTask) {
        const currentProjects = this.getProjects();

        for(const project of currentProjects) {

        }
    }

    static changeDate(task, dueDate) {
        task.dueDate = dueDate;
        this._addByDueDate(task);
    }
}