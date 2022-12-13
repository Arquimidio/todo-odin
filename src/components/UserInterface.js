export default class UserInterface {
    static newProjectName = document.getElementById('projects-new-name')
    static projectsAdder = document.getElementById('projects-adder');
    static projectsDisplay = document.getElementById('projects');
    static projectTitle = document.getElementById('project-name');
    static taskAdderContainer = document.getElementById('task-adder-container')
    static todoDisplay = document.getElementById('project-todos');
    static todoContainer = document.getElementById('todo-container');

    static clearChildren(element) {
        element.innerHTML = '';
    }

    static clearProjectDisplay() {
        const children = [...this.todoContainer.children]; 
        children.forEach(this.clearChildren.bind(this));
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
        const projectContainer = document.createElement('li');
        const projectName = document.createElement('span');
        const projectRemover = document.createElement('span');

        projectContainer.classList.add('project');
        projectRemover.classList.add('project-remover');

        projectName.textContent = text;
        projectRemover.textContent = 'x'
        projectContainer.append(
            projectName,
            projectRemover
        )

        this.projectsDisplay.append(projectContainer)

        return [projectContainer, projectName, projectRemover];
    }

    static renderTask(text) {
        return this.render(text, this.todoDisplay, ['task']);
    }

    static select(element) {
        element.classList.add('select');
    }

    static unselect(query) {
        const element = document.querySelector(query);
        element?.classList.remove('select');
    }

    static singleSelection(element) {
        this.unselect(element.classList[0] + '.select');
        this.select(element);
    }
}