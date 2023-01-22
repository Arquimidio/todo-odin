export default class UserInterface {
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

    static makeRemover() {
        const projectRemover = document.createElement('span');
        projectRemover.classList.add('project-remover', 'fa-solid', 'fa-delete-left');
        return projectRemover;
    }

    static renderProject(text, isRemovable = true) {
        const projectContainer = document.createElement('li');
        const projectName = document.createElement('span');
        const projectIcon = document.createElement('i');
        const projectLeft = document.createElement('div');

        projectContainer.classList.add('project');
        projectName.classList.add('project-title');
        projectIcon.classList.add('fa-solid', 'fa-folder');

        projectName.textContent = text;
        
        projectLeft.append(projectIcon, projectName);
        projectContainer.append(projectLeft);
        this.projectsDisplay.append(projectContainer)

        if(isRemovable) {
            const remover = this.makeRemover();
            projectContainer.append(remover);
            return [projectContainer, projectName, remover]
        } else {
            return [projectContainer, projectName];
        }
    }

    static renderTask(text, id, date='') {
        const listItem = this.makeItem();
        const dateSelector = document.createElement('input');
        const taskText = document.createElement('span');

        taskText.textContent = text;

        dateSelector.setAttribute('type', 'date');
        dateSelector.setAttribute('value', date);
        dateSelector.classList.add('date-selector');

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