import Project from "./Project";
import Task from "./Task";
import Priority from "./Priority";

const LIST_NAME = 'todoList';

class ProjectList {
    constructor(projects = []) {
        this.projects = projects;
    }
}

export default class Storage {

    static initialize() {
        const list = this.getList();

        if(!list) {
            this.setList(new ProjectList([]));
            return this.getList()
        }

        return list;
    }

    static initializeProject(proj) {
        const ProjectInstance = new Project(...Object.values(proj));
        const projectTasks = ProjectInstance.getTasks();
        const initializedTasks = projectTasks.map(task => {
            const taskObj = new Task(task);
            taskObj.priority = new Priority(task.priority);
            return taskObj;
        })
        ProjectInstance.setTodo(initializedTasks);
        return ProjectInstance;
    }

    static getList() {
        const list = localStorage.getItem(LIST_NAME);
        const parsedList = JSON.parse(list);

        if(parsedList) {
            const { projects } = parsedList;
            parsedList.projects = projects.map(this.initializeProject);
            return parsedList;
        } 
        
        return null;
    }

    static setList(list = new ProjectList()) {
        localStorage.setItem(
            LIST_NAME,
            JSON.stringify(list, (key, value) => {
                if(value instanceof Priority) {
                    return value.value;
                } else {
                    return value;
                }
            })
        )
    }
}