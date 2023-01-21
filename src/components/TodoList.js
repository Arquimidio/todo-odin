import Task from "./Task";
import Project from "./Project";
import Memory from "./Memory";
import UserInterface from "./UserInterface";

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
    
        projectContainer.addEventListener(
            'click', 
            () => {
                UserInterface.singleSelection(
                    projectContainer
                )
                this.showTasks.call(this, projectName)
                this.selectedProject = project;
            }
        );
    
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
    
        if(this.selectedProject?.getName() === name) {
            this.selectedProject = null;
            UserInterface.clearProjectDisplay();
        }
    }

    static showTasks(projectName) {
        const project = Memory.getProject(projectName);
        this.selectedProject = project;
        UserInterface.clearChildren(UserInterface.todoDisplay);
        UserInterface.setSelectedProject(projectName);
    
        project
            .getTasks(projectName)
            .forEach(
                task => UserInterface.renderTask.call(
                    UserInterface, 
                    task.title
                )
            );
    
        const addTaskForm = UserInterface.renderTaskAdder();
        addTaskForm.addEventListener(
            'submit', 
            this.submitTask.bind(this, projectName)
        );
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
        UserInterface.renderTask(input.value);
        Memory.setTask(targetProjectName, new Task(input.value));
        event.target.reset();
        input.blur();
    }
}