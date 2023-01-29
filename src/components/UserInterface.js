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

    static makeAdder() {
        const adderInput = document.createElement('input');
        adderInput.setAttribute('placeholder', 'Add task');
        return adderInput;
    }

    static makeAdderForm() {
        const adderForm = document.createElement('form');
        adderForm.classList.add('adder');
        return adderForm;
    }

    static makeDoneToggler(taskStatus) {
        const toggler = document.createElement('input');
        toggler.setAttribute('type', 'checkbox');
        taskStatus && toggler.setAttribute('checked', taskStatus);
        toggler.classList.add('done-toggler');
        return toggler;
    }

    static renderTaskAdder() {
        this.removeTaskAdder();

        const adderForm = this.makeAdderForm();
        adderForm.append(this.makeAdder());

        this.taskAdderContainer.append(adderForm);

        return adderForm;
    }

    static makeRemover() {
        const projectRemover = document.createElement('span');
        projectRemover.classList.add('project-remover', 'fa-solid', 'fa-delete-left');
        return projectRemover;
    }

    static makePrioritySelector(priorityValue) {
        const priority = document.createElement('div');
        priority.classList.add('priority', priorityValue);
        return priority;
    }

    static projectContent(text) {
        const projectName = document.createElement('span');
        const projectIcon = document.createElement('i');
        const projectLeft = document.createElement('div');

        projectName.classList.add('project-title');
        projectIcon.classList.add('fa-solid', 'fa-folder');
        projectName.textContent = text;

        projectLeft.append(projectIcon, projectName);

        return [projectLeft, projectName];
    }

    static renderProject(text, isRemovable = true) {
        const projectContainer = document.createElement('li');
        const [projectContentElement, projectName] = this.projectContent(text);

        projectContainer.classList.add('project');
        
        projectContainer.append(projectContentElement);
        this.projectsDisplay.append(projectContainer)

        if(isRemovable) {
            const remover = this.makeRemover();
            projectContainer.append(remover);
            return [projectContainer, projectName, remover]
        } else {
            return [projectContainer, projectName];
        }
    }

    static renderTask(task, isOutProject) {
        const listItem = this.makeItem();
        const prioritySelector = this.makePrioritySelector(task.priority.value);
        const doneToggler = this.makeDoneToggler(task.done);
        const dateSelector = document.createElement('input');
        const taskText = document.createElement('span');
        const taskLeft = document.createElement('div');
        
        taskText.textContent = isOutProject? `${task.title} (${task.parentProject})` : task.title;

        dateSelector.setAttribute('type', 'date');
        dateSelector.setAttribute('value', task.dueDate);
        dateSelector.classList.add('date-selector');
        taskLeft.classList.add('task-left')

        taskLeft.append(doneToggler, taskText);
        listItem.append(taskLeft, prioritySelector, dateSelector);
        listItem.classList.add('task');
        listItem.dataset.id = task.id || '';

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