import Project from "./Project";

const LIST_NAME = 'todoList';

class ProjectList {
    constructor(projects = []) {
        this.projects = projects;
    }
}

export default class Storage {

    static findByProp(array, prop, propVal) {
        return array.find(item => item[prop] === propVal);
    }

    static getList() {
        const list = localStorage.getItem(LIST_NAME);
        const parsedList = JSON.parse(list);
        if(parsedList) {
            const { projects } = parsedList;
            parsedList.projects = projects
                .map(proj => new Project(...Object.values(proj)));
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

    static initialize() {
        if(!this.getList()) {
            this.setList();
            this.setProject(new Project('Default'))
        }
    }

    static setProject(project) {
        console.log('ratata')
        const { projects } = this.getList();
        
        if(!this.findByProp(projects, 'name', project.name)) {
            projects.push(project);
            this.setList(new ProjectList(projects));
        } else {
            console.error('A project with this name already exists');
        }
    }

    static setTask(projectName, task) {
        const { projects } = this.getList();
        const targetProject = this.findByProp(
            projects, 
            'name', 
            projectName
        );
        if(targetProject) {
            targetProject.todo.push(task);
            this.setList(new ProjectList(projects));
        }
    }

    static getTasksFrom(projectName) {
        const { projects } = this.getList();
        const targetProject = this.findByProp(
            projects, 
            'name', 
            projectName
        );
        return targetProject.todo;
    }

}