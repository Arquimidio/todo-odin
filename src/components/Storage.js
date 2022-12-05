import { 
    differenceInWeeks,
    isToday
} from "date-fns";
import Project from "./Project";
import Task from "./Task";


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
    static getProjects() {
        const todos = localStorage.getItem('todos');
        return JSON.parse(todos).projects;
    }

    static saveProject(curProj) {
        const projects = this.getProjects();

    }

    static initStorage() {

    }
}