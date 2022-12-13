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

    static setSelectedProject(displayName) {
        this.projectTitle.textContent = displayName;
    }

    static removeTaskAdder() {
        this.taskAdderContainer.firstChild?.remove();
    }

    static renderTaskAdder() {
        this.removeTaskAdder();
        const adderForm = document.createElement('form');
        const adderInput = document.createElement('input');
        adderInput.setAttribute('placeholder', 'Add task')
        adderForm.classList.add('adder');
        adderForm.append(adderInput);
        this.taskAdderContainer.append(adderForm);

        return adderForm;
    }

    static render(text, parent, classes=[]) {
        const listItem = this.makeItem(text);
        listItem.classList.add(...classes);
        parent.append(listItem);
        return listItem;
    }

    static renderProject(text) {
        return this.render(
            text, 
            this.projectsDisplay, 
            ['project']
        );
    }

    static renderTask(text) {
        return this.render(text, this.todoDisplay);
    }
}