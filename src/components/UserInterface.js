
export default class UserInterface {
    static projectList;
    static projectsDisplay = document.getElementById('projects')
    static projectTitle = document.getElementById('project-name')
    static todoDisplay = document.getElementById('project-todos')

    static makeItem(text) {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }

    static updateProjectList(Storage) {
        this.projectList = Storage.getList().projects;
    }

    static initProjects() {
        this.projectList.forEach(project => {
            const listItem = this.makeItem(project.name);
            const clickHandler = this.showProject.bind(
                this, 
                project.getName(), 
                project.getTasks()
            )
            listItem.addEventListener('click', clickHandler);
            this.projectsDisplay.append(listItem);
        })
    }

    static showProject(project, todo) {
        this.clearTodoDisplay();
        this.projectTitle.textContent = project;
        todo.forEach(task => {
            const listItem = this.makeItem(task.title);
            this.todoDisplay.append(listItem);
        })
    }

    static clearTodoDisplay() {
        while(this.todoDisplay.firstChild) {
            this.todoDisplay.firstChild.remove();
        }
    }
}