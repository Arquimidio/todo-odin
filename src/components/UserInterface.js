import Task from './Task';
import Storage from './Storage';

export default class UserInterface {
    static projectList;
    static newProjectName = document.getElementById('projects-new-name')
    static projectsAdder = document.getElementById('projects-adder');
    static projectsDisplay = document.getElementById('projects');
    static projectTitle = document.getElementById('project-name');
    static taskAdderContainer = document.getElementById('task-adder-container')
    static todoDisplay = document.getElementById('project-todos');

    static makeItem(text) {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }

    static updateProjectList(Storage) {
        this.projectList = Storage.getList().projects;
    }

    static updateProjects(Storage) {
        this.projectsDisplay.innerHTML = '';
        this.updateProjectList(Storage);
        this.initProjects();
    }

    static setSelectedDisplay(displayName) {
        this.projectTitle.textContent = displayName;
    }

    static submitProject(Project, Storage, event) {
        event.preventDefault();
        const { value: projectName } = this.newProjectName; 
        Storage.setProject.call(Storage, new Project(projectName));
        this.updateProjects(Storage);
        event.target.reset();
    }

    static initProjectsAdder(Project, Storage) {
        this.projectsAdder.addEventListener(
            'submit', 
            this.submitProject.bind(this, Project, Storage)
        )
    }

    static removeTaskAdder() {
        this.taskAdderContainer.firstChild?.remove();
    }

    static submitTask(projectName, event) {
        event.preventDefault();
        const { target: { firstChild: input } } = event;
        Storage.setTask(projectName, new Task(input.value));
        this.updateProjectList(Storage);
        this.initAllTasks(Storage.getTasksFrom(projectName));
    }

    static initTaskAdder(projectName) {
        this.removeTaskAdder();
        const adderForm = document.createElement('form');
        const adderInput = document.createElement('input');
        adderForm.addEventListener('submit', this.submitTask.bind(this, projectName));
        adderForm.append(adderInput);
        this.taskAdderContainer.append(adderForm);
    }

    static initSingleProject(project) {
        const listItem = this.makeItem(project.name);
        const clickHandler = this.showProject.bind(
            this, 
            project.getName(), 
            project.getTasks()
        )
        listItem.addEventListener('click', clickHandler);
        this.projectsDisplay.append(listItem);
    }

    static initProjects() {
        this.projectList.forEach(
            this.initSingleProject.bind(this)
        );
    }

    // Creates a single task element in the DOM
    static initSingleTask(task) {
        const listItem = this.makeItem(task.title);
        this.todoDisplay.append(listItem);
    }   

    static initAllTasks(todo) {
        this.clearTodoDisplay();
        todo.forEach(this.initSingleTask.bind(this));
    }

    static showProject(project, todo) {
        this.setSelectedDisplay(project);
        this.initAllTasks(todo);
        this.initTaskAdder(project);
    }

    static clearTodoDisplay() {
        while(this.todoDisplay.firstChild) {
            this.todoDisplay.firstChild.remove();
        }
    }

    static load(ProjectModel, StorageModel) {
        this.updateProjectList(StorageModel);
        this.initProjectsAdder(ProjectModel, StorageModel);
        this.initProjects();
    }
}