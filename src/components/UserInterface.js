export default class UserInterface {
    static newProjectName = document.getElementById('projects-new-name')
    static projectsAdder = document.getElementById('projects-adder');
    static projectsDisplay = document.getElementById('projects');
    static projectTitle = document.getElementById('project-name');
    static taskAdderContainer = document.getElementById('task-adder-container')
    static todoDisplay = document.getElementById('project-todos');

    static clearChildren(element) {
        element.innerHTML = '';
    }

    static makeItem(text) {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }

    static updateProjects(allProjects) {
        this.clearChildren(this.projectsDisplay);
        this.initProjects(allProjects);
    }

    static setSelectedDisplay(displayName) {
        this.projectTitle.textContent = displayName;
    }

    static removeTaskAdder() {
        this.taskAdderContainer.firstChild?.remove();
    }

    static initTaskAdder() {
        this.removeTaskAdder();
        const adderForm = document.createElement('form');
        const adderInput = document.createElement('input');
        adderForm.append(adderInput);
        this.taskAdderContainer.append(adderForm);
        return adderForm;
    }

    static initProject(projectName) {
        const listItem = this.makeItem(projectName);
        this.projectsDisplay.append(listItem);
        return listItem;
    }

    // Creates a single task element in the DOM
    static initSingleTask(task) {
        const listItem = this.makeItem(task.title);
        this.todoDisplay.append(listItem);
    }   

    static showProject(project) {
        this.setSelectedDisplay(project);
        this.initTaskAdder(project);
    }

    static clearTodoDisplay() {
        while(this.todoDisplay.firstChild) {
            this.todoDisplay.firstChild.remove();
        }
    }
}