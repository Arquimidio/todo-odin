export default class UserInterface {
    static filtersDisplay = document.getElementById('filters');
    static newProjectName = document.getElementById('projects-new-name');
    static projectsAdder = document.getElementById('projects-adder');
    static projectsDisplay = document.getElementById('projects');
    static projectTitle = document.getElementById('project-name');
    static taskAdderContainer = document.getElementById('task-adder-container');
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

    static renderFilter(text) {
        const filter = document.createElement('li');
        filter.textContent = text;
        this.filtersDisplay.append(filter);

        return filter
    }

    static renderProject(text) {
        const projectContainer = document.createElement('li');
        const projectName = document.createElement('span');
        const projectRemover = document.createElement('span');

        projectContainer.classList.add('project');
        projectName.classList.add('project-title');
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

    static renderTask(text, id, date='') {
        const listItem = this.makeItem();
        const dateSelector = document.createElement('input');
        const taskText = document.createElement('span');

        taskText.textContent = text;

        dateSelector.setAttribute('type', 'date');
        dateSelector.setAttribute('value', date);

        listItem.append(taskText, dateSelector);
        listItem.classList.add('task');
        listItem.dataset.id = id || '';

        this.todoDisplay.append(listItem);
        return listItem;
    }

    static select(element) {
        element.classList.add('select');
    }

    static unselect(query) {
        const element = document.querySelector(query);
        element?.classList.remove('select');
    }

    static singleSelection(element) {
        const classes = [...element.classList];

        this.unselect(`.${classes[0]}` + '.select');
        this.select(element);
    }
}