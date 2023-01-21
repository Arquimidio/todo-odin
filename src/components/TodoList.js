import Task from "./Task";
import Project from "./Project";
import Memory from "./Memory";
import UserInterface from "./UserInterface";
import { v4 as uuidv4 } from 'uuid';

export default class TodoList {
    static selectedProject;

    static init() {
        // Submits project to memory on project adder submit
        UserInterface.projectsAdder.addEventListener(
            'submit',
            TodoList.submitProject.bind(TodoList)
        )

        // Saves the actual state of the TodoList to the localStorage when the user exits the page
        window.addEventListener('beforeunload', () => {
            Memory.saveToStorage();
        }, { capture: true })

        // Loads user projects from localStorage
        document.addEventListener(
            'DOMContentLoaded',
            this.loadProjects.bind(this, Memory.getProjects())
         )
    }

    static loadProject(project, isNew = false) {
        const projectName = project.getName();
        const [
            projectContainer,
            _, 
            projectRemover
        ] = UserInterface.renderProject(projectName);
    
        const showProject = () => {
            UserInterface.singleSelection(
                projectContainer
            )
            this.showTasks.call(this, projectName)
            this.selectedProject = project;
        }
        
        projectContainer.addEventListener('click', showProject);
        projectRemover.addEventListener(
            'click',
            this.deleteProject.bind(
                this, 
                projectName, 
                projectContainer
            )
        )
    
        if(isNew) {
            UserInterface.singleSelection(projectContainer);
        }
    }

    static loadProjects(projArray) {
        for(const project of projArray) {
            this.loadProject(project);
        }
    }
    
    static deleteProject(name, container, event) {
        event.stopPropagation();
        Memory.deleteProject(name);
        container.remove();

        const unselectProject = () => {
            this.selectedProject = null;
            UserInterface.clearProjectDisplay();
        }
    
        if(this.selectedProject?.getName() === name) {
           unselectProject();
        }
    }

    static showTasks(projectName) {
        const project = Memory.getProject(projectName);
        this.selectedProject = project;
        UserInterface.clearChildren(UserInterface.todoDisplay);
        UserInterface.setSelectedProject(projectName);
    
        project
            .getTasks(projectName)
            .forEach(task => this.showTask(project, task));
    
        const addTaskForm = UserInterface.renderTaskAdder();
        addTaskForm.addEventListener(
            'submit', 
            this.submitTask.bind(this, projectName)
        );
    }

    static showTask(project, task) {
        const listItem = UserInterface.renderTask.call(
            UserInterface, 
            task.title,
            task.id,
            task.dueDate
        )

        const dateSelector = listItem.querySelector('.date-selector');

        const updateDueDate = (event) => {
            const newTask = new Task(task);
            newTask.dueDate = event.target.value;
            project.editTask(task.id, newTask);
        }

        dateSelector.addEventListener('input', updateDueDate);
    }

    static submitProject(event) {
        event.preventDefault();
        const { value: projectName } = UserInterface.newProjectName; 
        if(!Memory.projectExists(projectName) && projectName.length >= 3) {
            event.target.reset();
            const newProject = new Project(projectName);
            this.loadProject(newProject, true);
            Memory.setProject.call(Memory, newProject);
            this.showTasks(projectName);
            UserInterface.newProjectName.blur();
        };
    }

    static submitTask(targetProjectName, event) {
        event.preventDefault();
        const { target: { firstChild: input } } = event;
        const project = Memory.getProject(targetProjectName);
        const newTaskId = uuidv4();
        const newTask = new Task({ title: input.value, id: newTaskId });
        this.showTask(project, newTask);
        project.setTask(newTask);
        event.target.reset();
        input.blur();
    }
}