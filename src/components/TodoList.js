import Task from "./Task";
import Project from "./Project";
import DinamicProject from "./DinamicProject";
import Memory from "./Memory";
import UserInterface from "./UserInterface";
import { v4 as uuidv4 } from 'uuid';
import { isToday, isThisWeek, parseISO } from "date-fns";

export default class TodoList {
    static selectedProject;

    static loadDefaultProjects() {
        this.loadProject({ project: new DinamicProject('Inbox', () => true), removable: false });
        this.loadProject({ project: new DinamicProject('Day', (task) => isToday(parseISO(task.dueDate))), removable: false });
        this.loadProject({ project: new DinamicProject('Week', (task) => isThisWeek(parseISO(task.dueDate))), removable: false });
    }

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

        this.loadDefaultProjects();

        // Loads user projects from localStorage
        document.addEventListener(
            'DOMContentLoaded',
            this.loadProjects.bind(this, Memory.getProjects())
         )
    }

    static loadProject({ project, isNew = false, removable = true }) {
        const projectName = project.getName();
        const [
            projectContainer,
            _, 
            projectRemover
        ] = UserInterface.renderProject(projectName, removable);
    
        const showProject = () => {
            UserInterface.singleSelection(
                projectContainer
            )
            this.showTasks.call(this, project, removable);
            this.selectedProject = project;
        }
        
        projectContainer.addEventListener('click', showProject);

        if(projectRemover) {
            projectRemover.addEventListener(
                'click',
                this.deleteProject.bind(
                    this, 
                    projectName, 
                    projectContainer
                )
            )
        }
        
        if(isNew) {
            UserInterface.singleSelection(projectContainer);
        }
    }

    static loadProjects(projArray) {
        for(const project of projArray) {
            this.loadProject({ project });
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
    
        unselectProject();
        UserInterface.unselect('.project');
    }

    static showTasks(project, isAdder = true) {
        this.selectedProject = project;
        UserInterface.clearChildren(UserInterface.todoDisplay);
        UserInterface.setSelectedProject(project.getName());
    
        project
            .getTasks()
            .forEach(task => this.showTask(task, !isAdder));
    
        if(isAdder) {
            const addTaskForm = UserInterface.renderTaskAdder();
            addTaskForm.addEventListener(
                'submit', 
                this.submitTask.bind(this, project.getName())
            );
        }  else {
            UserInterface.removeTaskAdder();
        }
    }

    static showTask(task, outProject = false) {
        const listItem = UserInterface.renderTask.call(
            UserInterface, 
            task.title,
            task.id,
            task.dueDate,
            task.parentProject,
            outProject
        )

        const dateSelector = listItem.querySelector('.date-selector');

        const updateDueDate = (event) => {
            const newTask = new Task(task);
            newTask.dueDate = event.target.value;
            task.updateTask(newTask);
        }

        dateSelector.addEventListener('input', updateDueDate);
    }

    static submitProject(event) {
        event.preventDefault();
        const { value: projectName } = UserInterface.newProjectName; 
        if(!Memory.projectExists(projectName) && projectName.length >= 3) {
            event.target.reset();
            const newProject = new Project(projectName);
            this.loadProject({ project: newProject, isNew: true });
            Memory.setProject.call(Memory, newProject);
            this.showTasks(newProject);
            UserInterface.newProjectName.blur();
        };
    }

    static submitTask(targetProjectName, event) {
        event.preventDefault();
        const { target: { firstChild: input } } = event;
        const project = Memory.getProject(targetProjectName);
        const newTaskId = uuidv4();
        const newTask = new Task({ title: input.value, id: newTaskId, parentProject: project.getName()});
        this.showTask(newTask);
        project.setTask(newTask);
        event.target.reset();
        input.blur();
    }
}