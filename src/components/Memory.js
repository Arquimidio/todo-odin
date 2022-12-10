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

    static findProject(projectName) {
        return this.list.projects.find(project => {
            return project.name === projectName
        })
    }

    static projectExists(projectName) {
        return !!this.findProject(projectName);
    }

    static getProject(projectName) {
        return this.findProject(projectName);
    }

    static setProject(project) {
        if(!this.projectExists(project.getName())) {
            console.log(project)
            this.getProjects().push(project);
        }
    }

    static getTasks(projectName) {
        return this.getProject(projectName)?.getTasks();
    }

    static setTask(projectName, task) {
        const targetProject = this.findProject(projectName);
        if(targetProject) {
            targetProject.setTask(task);
        }
    }

    static saveToStorage() {
        Storage.setList(this.list);
    }
}