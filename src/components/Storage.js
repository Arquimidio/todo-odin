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

    static initialize() {
        const list = this.getList();

        if(!list) {
            this.setList();
            this.setProject(new Project('Default'))
            return this.getList()
        }

        return list;
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
}