import Project from "./Project";
import Task from "./Task";

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
            this.setList(new ProjectList([new Project('default')]));
            return this.getList()
        }

        return list;
    }


    static getList() {
        const list = localStorage.getItem(LIST_NAME);
        const parsedList = JSON.parse(list);
        console.log(parsedList)

        if(parsedList) {
            const { projects } = parsedList;
            parsedList.projects = projects
                .map(proj => {
                    const ProjectInstance = new Project(...Object.values(proj));
                    const projectTasks = ProjectInstance.getTasks();
                    const initializedTasks = projectTasks.map(task => new Task(task))
                    ProjectInstance.setTodo(initializedTasks);
                    return ProjectInstance;
                });
                
            return parsedList;
        } 
        
        return null;
    }

    static setList(list = new ProjectList()) {
        localStorage.setItem(
            LIST_NAME,
            JSON.stringify(list)
        )
    }
}