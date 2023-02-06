import Project from "./Project";
import Storage from "./Storage";

export default class Memory {
    static list = Storage.initialize();

    static getList() {
        return this.list;
    }

    static setList(newList) {
        this.list = newList;
    }

    static getProjects() {
        return this.list.projects;
    }

    static setProjects(projects) {
        this.getList().projects = projects;
    }

    static getProject(projectName) {
        return this.findProject(projectName);
    }

    static setProject(project) {
        this.getProjects().push(project);
    }

    static findProject(projectName) {
        return this.list.projects.find(project => {
            return project.name === projectName
        })
    }

    static projectExists(projectName) {
        return !!this.findProject(projectName);
    }

    static deleteProject(projectName) {
        const projects = this.getProjects();
        const projIndex = projects
            .findIndex(project => project.getName() === projectName)

        const left = projects.slice(0, projIndex);
        const right = projects.slice(projIndex + 1);
        const newList = [...left, ...right];
        this.setProjects(newList);
    }

    static getAllTasks() {
        return this
            .getProjects()
            .map(project => project.getTasks())
            .reduce((acc, cur) => [...acc, ...cur], []);
    }

    static saveToStorage() {
        this.list.projects.forEach(proj => {
            proj.todo = proj.todo.filter(task => !task.done)
        })
        Storage.setList(this.list);
    }
}